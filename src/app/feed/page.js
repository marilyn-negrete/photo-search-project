'use client'
import { Kalam } from 'next/font/google';
import InfiniteScrollCarousel from "../components/Carousel/InfniteScrollCarousel";
import { StyledWrapper, StyledPost } from "./Feed.styled";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { StyledDropButton } from "../components/Buttons/Button.styled";
import Image from "next/image";
import Dialog from "../components/Dialog/Dialog";
import CreateCollectionForm from './CreateCollectionForm';
import CreatePostForm from './CreatePostForm';

// fonts
const kalam700 = Kalam({ subsets: ['latin'], weight: '700'});
const kalam300 = Kalam({ subsets: ['latin'], weight: '300'});

const Feed = () => {
    const [collectionData, error, isCollectionDataLoading] = useFetch(`${process.env.API_URL}/users/mna96/collections?client_id=${process.env.UNSPLASH_CLIENT_ID}`);
    const [photosData, theError, isDataLoading] = useFetch(`${process.env.API_URL}/photos`);
    const [collections, setCollections] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [dialog, setDialog] = useState({
        isOpen: false,
        title: "",
      });

      console.log(photos.length);

    useEffect(() => {
        if(photosData) setPhotos([...photosData]);
    },[photosData]);

    useEffect(() => {
        if(collectionData) setCollections(collectionData);
    },[collectionData]);

    console.log(photos);

    const closeDialog = () => {
        setDialog({
        isOpen: false,
        title: "",
        });
    };

    return (
        <>
            <StyledWrapper>
                <h4 className={kalam700.className}>My Collections</h4>
                <div className="content">
                    {isCollectionDataLoading ? (
                        <p className={kalam300.className}>Loading...</p>
                    ) : collections.length >= 1 ? (
                        <InfiniteScrollCarousel items={collections} />
                    ) : (
                        <p className={kalam300.className}>Make something awesome</p>
                    )}
                </div>
                <h4 className={kalam700.className}>Activity Feed</h4>
            </StyledWrapper>
            {photos.length > 1 ? photos.map((post) => (
                <StyledPost key={post.id}>
                    <div className="post-header">
                        <Image 
                            src={post.user?.profile_image.large || '/plain-background.png'} 
                            width={50} 
                            height={50} 
                            alt="user-photo"
                            placeholder='blur'
                            blurDataURL='/plain-background.png'
                        />
                        <div>
                            <p className={kalam700.className}>{post.user?.first_name} {post.user?.last_name || ""}</p>
                            <p className={kalam300.className}>{post.created_at}, {post.user?.location}</p>
                        </div>
                    </div>
                    <div className="post-body">
                        <p className={kalam300.className}>
                            {post.description || "Lorem ipsum dolor sit amet consectetur adipiscing elit eros at, leo varius imperdiet mi ultric"}
                        </p>
                        <Image 
                            src={post.urls?.raw || "/plain-background.png"} 
                            width={50} 
                            height={50} 
                            alt={post.alt_description || "placeholder image"}
                            quality={100}
                            priority={true}
                            placeholder='blur'
                            blurDataURL='/plain-background.png'
                        />
                    </div>
                </StyledPost>
            )): 'Working on it...'}
            <StyledDropButton>
                <button className="dropbtn">
                    <Image width={25} height={25} alt="Create" src="/plus.svg" />
                </button>
                <div className="dropdown-content">
                    <a
                        href="#"
                        onClick={() =>
                        setDialog({
                            isOpen: true,
                            title: "Create Collection",
                        })
                        }
                    >
                        Create Collection
                    </a>
                    <a
                        href="#"
                        onClick={() =>
                        setDialog({
                            isOpen: true,
                            title: "Create Post",
                        })
                        }
                    >
                        Create Post
                    </a>
                </div>
            </StyledDropButton>
            <Dialog dialog={dialog} closeDialog={closeDialog}>
                {dialog.title === "Create Collection" ? (
                    <CreateCollectionForm closeDialog={closeDialog}/>
                ) : <CreatePostForm />}
            </Dialog>
            {/* <DevTool control={control}/> */}
        </>
    )
}

export default Feed;