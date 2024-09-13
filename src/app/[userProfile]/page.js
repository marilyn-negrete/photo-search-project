'use client'
import { useAppContext } from "context/AppContext";
import { chewy400 } from "@/lib/fonts";
import { useState, useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";
import { ProfileHero, ProfileContent } from "./Profile.styled";
import Card from "@/components/Cards/Card";
import InputButton from "@/components/Buttons/InputButton";
import Dialog from "@/components/Dialog/Dialog";
import ShareCollection from "./ShareCollection";
import DeleteCollectionForm from "./DeleteCollectionForm";
import EditCollectionForm from "./EditCollectionForm";
import ProfileInsights from "./ProfileInsights";
import {updateRequest, deleteRequest} from "@/lib/helpers";

export default function Profile({ params }) {
    const { loggedUser } = useAppContext();
    const profileId = params.userProfile;
    const [profileData, profileDataError, profileDataLoading] = useFetch(`${process.env.API_URL}/users/${profileId}`, "no-cache");
    const [userCollections, userCollectionsError, userCollectionsLoading] = useFetch(`${process.env.API_URL}/users/${profileId}/collections?per_page=4`, "no-cache");
    const [dialog, setDialog] = useState({
        isOpen: false,
        title: ""
    });
    const [action, setAction] = useState('');
    const [collections, setCollections] = useState([]);
    const [collection, setCollection] = useState({
        id: '',
        title: '',
        private: false
    });

    useEffect(() => {
        if(userCollections.length) {
            setCollections([...userCollections]);
        }
    },[userCollections]);

    const toggleIsPrivate = (e) => {        
        setCollection({
            ...collection,
            private: !collection.private,
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
    
    const handleUpdateCollection = async (e) => {
        e.preventDefault();
        let theNewCollection = {...collection}
        const data = await updateRequest(theNewCollection, `$/collections/${collection.id}}`);
        if(data) {
            const newCollectionsArr = collections.map(item => item.id === theNewCollection.id ? theNewCollection: item);
            setCollections([...newCollectionsArr]);
        }
        handleCloseDialog();
    }

    const handleDeleteCollection = async (e) => {
        e.preventDefault();
        let theCollection = {id: collection.id}

        const data = await deleteRequest(theCollection);
        if(data.ok) {
            const newCollectionsArr = collections.filter(el => el.id !== theCollection.id);
            setCollections([...newCollectionsArr]);
        }
        handleCloseDialog();
    }

    return (
        <>
            <ProfileHero>
                <ProfileInsights 
                    profileData={profileData}
                    dialog={dialog}
                    handleOpenDialog={handleOpenDialog} 
                    handleCloseDialog={handleCloseDialog} 
                />
            </ProfileHero>

            {collections ? 
                <ProfileContent>
                    <h3 className={chewy400.className}>My photos ({profileData.total_collections || 0})</h3>
                    <div className="collections-list">
                        {collections.map(el => {
                            return (
                                <Card 
                                    key={el.id} 
                                    el={el} 
                                    handleOpenDialog={handleOpenDialog}
                                    setCollection={setCollection}
                                    setAction={setAction}
                                    visibleCTA={profileId === loggedUser.username}
                                />
                            )
                        })}
                    </div>

                    { collections > 5 ? 
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
                : "This user doesn't have collections created yet"
            }
            <Dialog dialog={dialog} closeDialog={handleCloseDialog}>
                { action === 'edit' &&
                    <EditCollectionForm 
                        collection={collection} 
                        handleTitleChange={handleTitleChange} 
                        toggleIsPrivate={toggleIsPrivate} 
                        handleSubmit={handleUpdateCollection}
                    />
                }
                { action === 'delete' && 
                    <DeleteCollectionForm 
                        collection={collection} 
                        handleSubmit={handleDeleteCollection}
                    />
                }
                { action === 'share' && 
                    <ShareCollection collection={collection} />
                }
            </Dialog>
        </>
    )
}