'use client'
import { Kalam } from 'next/font/google';
import InfiniteScrollCarousel from "../components/Carousel/InfniteScrollCarousel";
import { StyledWrapper } from "./Feed.styled";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { StyledDropButton } from "../components/Buttons/Button.styled";
import Image from "next/image";
import Dialog from "../components/Dialog/Dialog";
import CreateCollectionForm from './createCollectionForm';
import CreatePostForm from './CreatePostForm';

// fonts
const kalam700 = Kalam({ subsets: ['latin'], weight: '700'});
const kalam400 = Kalam({ subsets: ['latin'], weight: '400'});

const Feed = () => {
    const [collections, setCollections] = useState([]);
    const {data, error, loading } = useFetch(`${process.env.API_URL}/users/mna96/collections?client_id=${process.env.UNSPLASH_CLIENT_ID}`);
    const [dialog, setDialog] = useState({
        isOpen: false,
        title: "",
      });

  const closeDialog = () => {
    setDialog({
      isOpen: false,
      title: "",
    });
  };

    useEffect(() => {
        if(data) { 
            setCollections(data)
        }
    },[data]);

    return (
        <>
            <StyledWrapper>
                <h4 className={kalam700.className}>My Collections</h4>
                <div className="content">
                    {loading ? (
                        <p className={kalam400.className}>Loading...</p>
                    ) : collections.length >= 1 ? (
                        <InfiniteScrollCarousel items={collections} />
                    ) : (
                        <p className={kalam400.className}>Make something awesome</p>
                    )}
                </div>
            </StyledWrapper>
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