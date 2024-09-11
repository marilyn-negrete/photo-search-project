'use client'
import { useAppContext } from "context/AppContext";
import { chewy400 } from "@/lib/fonts";
import { useState, useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";
import { ProfileWrapper, ProfileContent } from "./Profile.styled";
import Card from "@/components/Cards/Card";
import InputButton from "@/components/Buttons/InputButton";
import Dialog from "@/components/Dialog/Dialog";
import ShareCollection from "./ShareCollection";
import DeleteCollectionForm from "./DeleteCollectionForm";
import EditCollectionForm from "./EditCollectionForm";
import ProfileStats from "./ProfileStats";
import {updateRequest, deleteRequest} from "@/lib/helpers";

export default function Profile({ params }) {
    const { loggedUser } = useAppContext();
    const profileId = params.userProfile;
    const [userProfileData, userProfileDataError, userProfileDataLoading] = useFetch(`${process.env.API_URL}/users/${profileId}`, "no-cache");
    const [userCollections, userCollectionsError, userCollectionsLoading] = useFetch(`${process.env.API_URL}/users/${profileId}/collections?per_page=4`, "no-cache");
    const [dialog, setDialog] = useState({
        isOpen: false,
        title: ""
    });
    const [collections, setCollections] = useState([]);
    const [collection, setCollection] = useState({
        cta: '',
        title: '',
        isPrivate: false,
        shareLink: '',
    });

    useEffect(() => {
        if(userCollections.length) {
            setCollections([...userCollections]);
        }
    },[userCollections]);

    const toggleIsPrivate = (e) => {        
        setCollection({
            ...collection,
            isPrivate: !collection.isPrivate,
        });
    }

    const handleTitleChange = (e) => {
        setCollection({
            ...collection,
            title: e.target.value,
        });
    }
    
    const handleCloseDialog = () => setDialog({...dialog, isOpen: false});
    const handleOpenDialog = (dialogTitle) => setDialog({...dialog, isOpen: true, title: dialogTitle});
    
    const handleUpdateCollection = async () => {
        let theNewCollection = {
            id: collection.id,
            title: collection.title,
            private: collection.isPrivate, 
        }

        const data = await updateRequest(theNewCollection);

        if(data.ok) {
            const newCollectionsArr = collections.map(item => item.id === theNewCollection.id ? theNewCollection: item);
            setCollections([...newCollectionsArr]);
        }

    }

    const handleDeleteCollection = async () => {
        let theCollection = {
            id: collection.id
        }

        const data = await deleteRequest(theCollection);

        if(data.ok) {
            const newCollectionsArr = collections.filter(el => el.id != theCollection.id);
            setCollections([...newCollectionsArr]);
        }
    }

    // console.log(collections);

    return (
        <>
            <ProfileWrapper>
                <ProfileStats profileStats={userProfileData} />
            </ProfileWrapper>
            {userProfileData ? 
                <ProfileContent>
                    <h3 className={chewy400.className}>My photos ({userProfileData.total_collections || 0})</h3>
                    <div className="collections-list">
                        {collections ? collections.map(el => {
                            return <Card 
                                key={el.id} 
                                el={el} 
                                handleOpenDialog={handleOpenDialog}
                                setCollection={setCollection}
                                visibleCTA={profileId === loggedUser.username}
                                />
                        }) : "This user doesn't have collections created yet"}
                    </div>

                    { userProfileData.total_collections > 5 ? 
                        <InputButton 
                            id="loadMoreCollections" 
                            name="loadMoreCollections" 
                            handleOnClick={() => 'load more collections'} 
                            value="Load more" 
                            elementType="button" 
                            backgroundColor="white" 
                            disabled={false} 
                        /> 
                    : null }
                </ProfileContent>
                : ''
            }
            <Dialog dialog={dialog} closeDialog={handleCloseDialog}>
                { collection.cta === 'edit' &&
                    <EditCollectionForm 
                        collection={collection} 
                        handleTitleChange={handleTitleChange} 
                        toggleIsPrivate={toggleIsPrivate} 
                        handleSubmit={handleUpdateCollection}
                    />
                }
                { collection.cta === 'delete' && 
                    <DeleteCollectionForm 
                        collection={collection} 
                        handleSubmit={handleDeleteCollection}
                    />
                }
                { collection.cta === 'share' && 
                    <ShareCollection collection={collection} />
                }
            </Dialog>
        </>
    )
}