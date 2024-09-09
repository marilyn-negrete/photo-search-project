import React from 'react'
import TextField from '@/components/Inputs/TextField';
import Checkbox from '@/components/Inputs/Checkbox';

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
        <input type="submit" value="Update"/>
    </form>
  )
}
