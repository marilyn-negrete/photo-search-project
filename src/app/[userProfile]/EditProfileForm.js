import React from 'react'
import TextField from '@/components/Inputs/TextField';
import TextareaField from '@/components/Inputs/TextareaField';
import InputButton from '@/components/Buttons/InputButton';
import { StyledFormActions } from './Profile.styled';

export default function EditProfileForm({ formData, onSubmit, handleFieldChange }) {
    return (
        <form onSubmit={onSubmit}>
            <TextField 
                id="first_name"
                label="First Name" 
                required={true} 
                value={formData.first_name} 
                handleChange={handleFieldChange}
            />
            <TextField 
                id="last_name"
                label="Last Name" 
                required={true} 
                value={formData.last_name} 
                handleChange={handleFieldChange}
            />
            <TextField 
                id="location"
                label="Location" 
                required={false} 
                value={formData.location} 
                handleChange={handleFieldChange}
            />
            <TextareaField 
                id="bio"
                label="Bio" 
                required={true} 
                value={formData.bio} 
                handleChange={handleFieldChange}
            />
            <TextField 
                id="instagram_username"
                label="Instagram username" 
                required={false} 
                value={formData.instagram_username} 
                handleChange={handleFieldChange}
            />
            <TextField 
                id="twitter_username"
                label="Twitter username" 
                required={false} 
                value={formData.twitter_username} 
                handleChange={handleFieldChange}
            />
            <StyledFormActions className='form-actions'>
                <InputButton 
                    id="updateProfile" 
                    name="updateProfile" 
                    value="Done" 
                    elementType="submit" 
                    backgroundColor="black"
                />
            </StyledFormActions>
        </form>
    )
}
