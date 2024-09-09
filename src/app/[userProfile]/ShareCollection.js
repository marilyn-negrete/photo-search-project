import React from 'react'
import { StyledSharing, StyledText } from './UserProfile.styled';

export default function ShareCollection(props) {
    const { collection } = props;

    return (
        <StyledSharing>
            <p>{collection.shareLink}</p>
            <button>copy link</button>
        </StyledSharing>
    )
}
