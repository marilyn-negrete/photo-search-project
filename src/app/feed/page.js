"use client";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { getJWToken } from "../lib/helpers";
import { Kalam } from "next/font/google";
import { StyledWrapper, StyledPostsWrapper } from "./Feed.styled";
import { StyledDropButton } from "../components/Buttons/Button.styled";
import Image from "next/image";
import InfiniteScrollCarousel from "../components/Carousel/InfniteScrollCarousel";
import Dialog from "../components/Dialog/Dialog";
import CreateCollectionForm from "./CreateCollectionForm";
import CreatePostForm from "./CreatePostForm";
import PostItem from "./PostItem";

// fonts
const kalam700 = Kalam({ subsets: ["latin"], weight: "700" });
const kalam300 = Kalam({ subsets: ["latin"], weight: "300" });

const Feed = () => {
  const { photos, collections, isCollectionDataLoading } = useAppContext();
  const [relatedPosts, setRelatedPosts] = useState([...photos]);
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

  const handleSelectCollection = async (id) => {
    let string = id.toLowerCase().replace(/&/g, "and");
    
    try {
      const response = await fetch(`${process.env.API_URL}/search/photos?query=${string}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getJWToken()
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
      setRelatedPosts(data.results);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <StyledWrapper>
        <h4 className={kalam700.className}>My Collections</h4>
        <div className="content">
          {isCollectionDataLoading ? (
            <p className={kalam300.className}>Loading...</p>
          ) : collections.length >= 1 ? (
            <InfiniteScrollCarousel
              items={collections}
              onSelectCollection={handleSelectCollection}
            />
          ) : (
            <p className={kalam300.className}>Create something awesome!</p>
          )}
        </div>
        <h4 className={kalam700.className}>Activity Feed</h4>
      </StyledWrapper>
      <StyledPostsWrapper>
        {relatedPosts.length > 1 ? (
          relatedPosts.map((post) => <PostItem post={post} key={post.id} />)
        ) : (
          <p className={kalam300.className}>Working on it...</p>
        )}
      </StyledPostsWrapper>
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
          <CreateCollectionForm closeDialog={closeDialog} />
        ) : (
          <CreatePostForm />
        )}
      </Dialog>
      {/* <DevTool control={control}/> */}
    </>
  );
};

export default Feed;
