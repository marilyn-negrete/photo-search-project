import React from 'react'
import InputButton from '@/components/Buttons/InputButton';
import { StyledFormActions } from './UserProfile.styled';

export default function DeleteCollectionForm(props) {
    const { collection, handleSubmit } = props;

    return (
        <div>
            <p>Confirm you want to delete the collection {collection.title}</p>
            <form onSubmit={handleSubmit}>
                <StyledFormActions>
                    <InputButton 
                        id="deleteCollection" 
                        name="deleteCollection" 
                        value="delete" 
                        elementType="submit" 
                        backgroundColor="black" 
                    />
                </StyledFormActions>
            </form> 
        </div>
    )
}
