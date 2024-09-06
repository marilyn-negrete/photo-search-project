import React from 'react'
import Image from 'next/image'
import IconButton from '../Buttons/IconButton'
import { StyledCard } from './Card.styled';
import { kalam300 } from "@/lib/fonts";

export default function Card(props) {
    const { data } = props;

    const handleClick = (action) => {
        console.log('click', action);
    }

    return (
        <StyledCard>
            <div className="col-1">
                <Image src={data.cover_photo ? data.cover_photo.urls.small : '/no-thumb.png'} width={70} height={70} alt={data.title}/>
            </div>
            <div className="col-2">
                <p className={`title ${kalam300.className}`}>{data.title}</p>
                <div className="actions">
                    <IconButton 
                        handleOnClick={() => handleClick('share')}
                        srcIcon="/share.svg"
                        size="sm" 
                        altIcon="share collection" 
                        label="share"
                    />
                    <IconButton 
                        handleOnClick={() => handleClick('edit')}
                        srcIcon="/note-pad.svg"
                        size="sm" 
                        altIcon="edit collection" 
                        label="edit"
                    />
                    <IconButton 
                        handleOnClick={() => handleClick('delete')}
                        srcIcon="/delete-bucket.svg"
                        size="sm" 
                        altIcon="delete collection" 
                        label="delete"
                    />
                </div>
            </div>
        </StyledCard>
    )
}
