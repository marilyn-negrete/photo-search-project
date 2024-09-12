import React from 'react'
import TextField from '@/components/Inputs/TextField';
import Checkbox from '@/components/Inputs/Checkbox';
import InputButton from '@/components/Buttons/InputButton';
import { StyledFormActions } from './Profile.styled';

export default function EditCollectionForm(props) {
    const { collection, handleTitleChange, toggleIsPrivate, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
        <TextField 
            id="collectionTitle" 
            label="Title" 
            required={true} 
            value={collection.title}
            handleChange={handleTitleChange}
        />
        <Checkbox
            checked={collection.isPrivate}
            handleChange={toggleIsPrivate}
            label="Private" 
            id="isPrivate" 
        />
        <StyledFormActions className='form-actions'>
            <InputButton 
                id="updateCollection" 
                name="updateCollection" 
                value="Update" 
                elementType="submit" 
                backgroundColor="black" 
            />
        </StyledFormActions>
    </form>
  )
}
