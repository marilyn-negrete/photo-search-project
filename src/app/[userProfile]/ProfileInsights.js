import React from 'react';
import { useState, useEffect } from "react";
import { kalam400 } from "@/lib/fonts";
import Loader from "@/components/Loaders/CustomLoading";
import InputButton from '@/components/Buttons/InputButton';
import Dialog from '@/components/Dialog/Dialog';
import EditProfileForm from './EditProfileForm';
import { updateRequest } from '@/lib/helpers';
import About from './About';

const INITIAL_FORM_DATA = {
    first_name: '',
    last_name: '',
    location: '',
    bio: '',
    instagram_username: '',
    twitter_username: ''
}

export default function ProfileInsights({userProfile, setUserProfile}) {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [dialog, setDialog] = useState({
        isOpen: false,
        title: ""
    });
    const handleCloseDialog = () => setDialog({...dialog, isOpen: false});
    const handleOpenDialog = (dialogTitle) => setDialog({...dialog, isOpen: true, title: dialogTitle});

    const handleFieldChange = (e) => {
        setFormData((prev) =>({
            ...prev,
            [e.target.id]: e.target.value
        }));
    }

    useEffect(() => {
        if (!userProfile) return;
        setFormData({
            first_name: userProfile.first_name,
            last_name: userProfile.last_name,
            location: userProfile.location,
            bio: userProfile.bio,
            instagram_username: userProfile.instagram_username,
            twitter_username: userProfile.twitter_username
        });
    },[userProfile]);

    const handleEditProfile = async (e) => {
        e.preventDefault();
        const { data, status } = await updateRequest(formData, '/me');
        if(status === 'success') { 
            setUserProfile((prev) => ({
                ...prev,
                first_name: data.first_name,
                last_name: data.last_name,
                location: data.location,
                bio: data.bio,
                instagram_username: data.instagram_username,
                twitter_username: data.twitter_username,
            }))
        } else {
            console.error('user profile could not be updated');
        }
        handleCloseDialog();
    }

    return (
        <>
        {userProfile ? (
            <div className="insights">
                <About userProfile={userProfile} />
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
                <EditProfileForm formData={formData} handleFieldChange={handleFieldChange} onSubmit={handleEditProfile} />
            </Dialog>
        </>
  )
}
