import React from 'react'
import Image from 'next/image'
import IconButton from '../Buttons/IconButton'
import { StyledCard } from './Card.styled';
import { kalam300 } from "@/lib/fonts";

export default function Card(props) {
    const { el, handleOpenDialog, setCollection, setAction, visibleCTA } = props;
    
    const handleClick = (cta) => {
        setAction(cta);
        handleOpenDialog(`${cta} collection`);
        setCollection({...el});
    }

    return (
        <StyledCard>
            <div className="col-1">
                <Image src={el.cover_photo ? el.cover_photo.urls.small : el.thumbnailSrc} width={70} height={70} alt={el.title}/>
            </div>
            <div className="col-2">
                <p className={`title ${kalam300.className}`}>{el.title}</p>
                <div className="actions">
                    <IconButton 
                        handleOnClick={() => handleClick('share')}
                        srcIcon="/share.svg"
                        size="sm" 
                        altIcon="share collection" 
                        label="share"
                    />
                    
                    { visibleCTA ? 
                    <>
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
                    </>
                    : null}
                </div>
            </div>
        </StyledCard>
    )
}
