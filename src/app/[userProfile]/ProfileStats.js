import React from 'react';
import { useState, useEffect } from "react";
import { kalam300, kalam400, kalam700 } from "@/lib/fonts";
import { StyledItem } from './Profile.styled';
import Loader from "@/components/Loaders/CustomLoading";
import Image from 'next/image';
import InputButton from '@/components/Buttons/InputButton';
import Dialog from '@/components/Dialog/Dialog';
import EditProfileForm from './EditProfileForm';
import { updateRequest } from '@/lib/helpers';

export default function ProfileStats(props) {
    const { profileStats } = props;
    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        location: '',
        bio: '',
        instagram_username: '',
        twitter_username: ''
    });
    const [dialog, setDialog] = useState({
        isOpen: false,
        title: ""
    });

    const handleCloseDialog = () => setDialog({...dialog, isOpen: false});
    const handleOpenDialog = (dialogTitle) => setDialog({...dialog, isOpen: true, title: dialogTitle});

    const handleFieldChange = (e) => {
        setProfile({
            ...profile,
            [e.target.id]: e.target.value
        });
    }    

    useEffect(() => {
        setProfile({
            first_name: profileStats.first_name,
            last_name: profileStats.last_name,
            location: profileStats.location,
            bio: profileStats.bio,
            instagram_username: profileStats.instagram_username,
            twitter_username: profileStats.twitter_username
        });
    },[profileStats]);

    const handleEditProfile = async (e) => {
        e.preventDefault();
        let newProfile = {...profile}
        const data = await updateRequest(newProfile, '/me');
        if(data.ok) setProfile({...newProfile});
    }

    return (
        <>
        {profileStats ? (
            <div className="profile">
                <div className="profile-picture">
                    <Image src={profileStats.profile_image?.medium || "/no-thumb.png"} alt="user-profile-picture" width={80} height={80}/>
                </div>
                <div className="profile-details">
                    <div className="profile-name">
                        <span className={kalam700.className}>{profileStats.name}</span>
                        <span className={kalam300.className}>@{profileStats.username || '---'}</span>
                    </div>
                    <div className="profile-bio">
                        <p className={kalam300.className}>{profileStats.bio}</p>
                    </div>
                    <div className="profile-stats">
                        <StyledItem>
                            <span className={kalam300.className}>Collections</span>
                            <div className={kalam400.className}>
                                <Image src="/camera.svg" alt="total collections" width={20} height={20}/>
                                <span>
                                    {profileStats.total_collections || 0}
                                </span>
                            </div>
                        </StyledItem>
                        <StyledItem>
                            <span className={kalam300.className}>Score</span>
                            <div className={kalam400.className}>
                                <Image src="/like.svg" alt="total likes" width={20} height={20}/>
                                <span>
                                    {profileStats.total_likes || 0}
                                </span>
                            </div>
                        </StyledItem>
                        <StyledItem>
                            <span className={kalam300.className}>Followers</span>
                            <div className={kalam400.className}>
                                <Image src="/followers.svg" alt="followers" width={20} height={20}/>
                                <span>
                                    {profileStats.followers_count || 0}
                                </span>
                            </div>
                        </StyledItem>
                    </div>
                    <InputButton
                        id="editProfile"
                        name="editProfile"
                        handleOnClick={() => handleOpenDialog('edit profile')}
                        value="Edit Profile"
                        elementType="button"
                        backgroundColor="brown"
                        disabled={false}
                        className={`thin-btn ${kalam400.className}`}
                    />
                </div>
            </div>
            ) : <Loader />}
            <Dialog dialog={dialog} closeDialog={handleCloseDialog}>
                <EditProfileForm profile={profile} handleFieldChange={handleFieldChange} onSubmit={handleEditProfile} />
            </Dialog>
        </>
  )
}
