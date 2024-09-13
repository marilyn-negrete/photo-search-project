import React from 'react';
import { useState, useEffect } from "react";
import { kalam400 } from "@/lib/fonts";
import Loader from "@/components/Loaders/CustomLoading";
import InputButton from '@/components/Buttons/InputButton';
import Dialog from '@/components/Dialog/Dialog';
import EditProfileForm from './EditProfileForm';
import { updateRequest } from '@/lib/helpers';
import About from './About';

export default function ProfileInsights(props) {
    const { profileData } = props;
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
            first_name: profileData.first_name,
            last_name: profileData.last_name,
            location: profileData.location,
            bio: profileData.bio,
            instagram_username: profileData.instagram_username,
            twitter_username: profileData.twitter_username
        });
    },[profileData]);

    const handleEditProfile = async (e) => {
        e.preventDefault();
        let newProfile = {...profile}
        const data = await updateRequest(newProfile, '/me');
        if(data.ok) { 
            setProfile(newProfile);
        };
        handleCloseDialog();
    }

    return (
        <>
        {profileData ? (
            <div className="insights">
                <About profileData={profileData} />
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
            ) : <Loader />}
            <Dialog dialog={dialog} closeDialog={handleCloseDialog}>
                <EditProfileForm profile={profile} handleFieldChange={handleFieldChange} onSubmit={handleEditProfile} />
            </Dialog>
        </>
  )
}
