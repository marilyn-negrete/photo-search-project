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

const INITIAL_USER_PROFILE = {
    username: '',
    name: '',
    first_name: '',
    last_name: '',
    location: '',
    bio: '',
    instagram_username: '',
    twitter_username: '',
    total_collections: 0,
    total_likes: 0,
    followers_count: 0,
    profile_image: ''
}

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
    const [userProfile, setUserProfile] = useState(INITIAL_USER_PROFILE);

    useEffect(() => {
        if(userCollections.length) {
            setCollections([...userCollections]);
        }
    },[userCollections]);

    useEffect(() => {
        if(profileData) {
            console.log(profileData);
            
            setUserProfile({
                username: profileData.username,
                name: profileData.name,
                first_name: profileData.first_name,
                last_name: profileData.last_name,
                location: profileData.location,
                bio: profileData.bio,
                instagram_username: profileData.instagram_username,
                twitter_username: profileData.twitter_username,
                total_collections: profileData.total_collections,
                total_likes: profileData.total_likes,
                followers_count: 0,
                profile_image: profileData.profile_image?.medium || profileData.profile_image?.small 
            })
        }
    },[profileData]);

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
        const { status } = await updateRequest(collection, `/collections/${collection.id}`);
        if(status === 'success') {
            const updatedCollections = collections.map(item => item.id === collection.id ? collection : item);
            setCollections([...updatedCollections]);
        }
        handleCloseDialog();
    }

    const handleDeleteCollection = async (e) => {
        e.preventDefault();
        const { data, status } = await deleteRequest(collection);

        if(status === 'success') {
            const newCollectionsArr = collections.filter(el => el.id !== collection.id);
            setCollections([...newCollectionsArr]);
        }
        handleCloseDialog();
    }

    return (
        <>
            <ProfileHero>
                <ProfileInsights 
                    setUserProfile={setUserProfile}
                    userProfile={userProfile}
                    dialog={dialog}
                    handleOpenDialog={handleOpenDialog} 
                    handleCloseDialog={handleCloseDialog} 
                />
            </ProfileHero>

            {collections ? 
                <ProfileContent>
                    <h3 className={chewy400.className}>My photos ({userProfile.total_collections})</h3>
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

                    { userProfile.total_collections > 5 ? 
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