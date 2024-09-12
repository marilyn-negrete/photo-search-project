import React from 'react'
import { StyledSharing, StyledText } from './Profile.styled';

export default function ShareCollection(props) {
    const { collection } = props;

    return (
        <StyledSharing>
            <p>{collection.shareLink}</p>
            <button>copy link</button>
        </StyledSharing>
    )
}
