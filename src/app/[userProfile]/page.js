'use client'
import { useAppContext } from "context/AppContext";
import { chewy400, kalam300, kalam400, kalam700 } from "@/lib/fonts";
import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";
import Loader from "@/components/Loaders/CustomLoading";
import { ProfileWrapper, ProfileContent, StyledItem } from "./Profile.styled";
import Card from "@/components/Cards/Card";
import InputButton from "@/components/Buttons/InputButton";
import Dialog from "@/components/Dialog/Dialog";
import TextField from "@/components/Inputs/TextField";
import Checkbox from "@/components/Inputs/Checkbox";
import ShareCollection from "./ShareCollection";
import DeleteCollectionForm from "./DeleteCollectionForm";
import EditCollectionForm from "./EditCollectionForm";

export default function Profile({ params }) {
    const { loggedUser } = useAppContext();
    const profileId = params.userProfile;
    const [userProfileData, userProfileDataError, userProfileDataLoading] = useFetch(`${process.env.API_URL}/users/${profileId}`, "no-cache");
    const [userCollections, userCollectionsError, userCollectionsLoading] = useFetch(`${process.env.API_URL}/users/${profileId}/collections?per_page=4`, "no-cache");
    const [dialog, setDialog] = useState({
        isOpen: false,
        title: ""
    });

    const [collection, setCollection] = useState({
        cta: '',
        title: '',
        isPrivate: false,
        shareLink: '',
    });

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
    const handleOpenDialog = () => setDialog({...dialog, isOpen: true, title: "Edit Collection"});
    
    const actionHandler = (e) => {
        e.preventDefault();
        console.log('submiting ', collection);
    }

    return (
        <>
            <ProfileWrapper>
                {userProfileData ? (
                    <div className="profile">
                    <div className="profile-picture">
                        <Image src={userProfileData.profile_image?.medium || "/no-thumb.png"} alt="user-profile-picture" width={80} height={80}/>
                    </div>
                    <div className="profile-details">
                        <div className="profile-name">
                            <span className={kalam700.className}>{userProfileData.name}</span>
                            <span className={kalam300.className}>@{userProfileData.username || '---'}</span>
                        </div>
                        <div className="profile-stats">
                            <StyledItem>
                                <span className={kalam300.className}>Collections</span>
                                <div className={kalam400.className}>
                                    <Image src="/camera.svg" alt="total collections" width={20} height={20}/>
                                    <span>
                                        {userProfileData.total_collections || 0}
                                    </span>
                                </div>
                            </StyledItem>
                            <StyledItem>
                                <span className={kalam300.className}>Score</span>
                                <div className={kalam400.className}>
                                    <Image src="/like.svg" alt="total likes" width={20} height={20}/>
                                    <span>
                                        {userProfileData.total_likes || 0}
                                    </span>
                                </div>
                            </StyledItem>
                            <StyledItem>
                                <span className={kalam300.className}>Followers</span>
                                <div className={kalam400.className}>
                                    <Image src="/followers.svg" alt="followers" width={20} height={20}/>
                                    <span>
                                        {userProfileData.followers_count || 0}
                                    </span>
                                </div>
                            </StyledItem>
                        </div>
                    </div>
                </div>
                ) : <Loader />}
            </ProfileWrapper>
            
            {userProfileData ? 
                <ProfileContent>
                    <h3 className={chewy400.className}>My photos ({userProfileData.total_collections || 0})</h3>
                    <div className="collections-list">
                        {userCollections.length ? userCollections.map(collection => {
                            return <Card 
                                key={collection.id} 
                                data={collection} 
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
                        handleSubmit={actionHandler}
                    />
                }
                { collection.cta === 'delete' && 
                    <DeleteCollectionForm 
                        collection={collection} 
                        handleSubmit={actionHandler}
                    />
                }
                { collection.cta === 'share' && 
                    <ShareCollection 
                        collection={collection} 
                    />
                }
            </Dialog>
        </>
    )
}