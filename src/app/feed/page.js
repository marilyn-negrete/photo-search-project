"use client";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { kalam300, kalam700 } from "@/app/lib/fonts";
import { StyledCollectionsWrapper, StyledPostsWrapper } from "./Feed.styled";
import InfiniteScrollCarousel from "../components/Carousel/InfniteScrollCarousel";
import Dialog from "../components/Dialog/Dialog";
import CreateCollectionForm from "./CreateCollectionForm";
import CreatePostForm from "./CreatePostForm";
import PostItem from "./PostItem";
import DropDownButton from "../components/Buttons/DropDownButton";
import { useSearch } from "../hooks/useSearch";

const Feed = () => {
  const { photos, collections, isCollectionDataLoading } = useAppContext();
  const [theQuery, setTheQuery] = useState("");
  const [results, loading, error] = useSearch(theQuery);
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

  const openDialog = (title) => {
    setDialog({
      title,
      isOpen: true,
    });
  };

  const triggerSearch = (queryString) => setTheQuery(queryString);

  return (
    <>
      <StyledCollectionsWrapper>
        <h4 className={kalam700.className}>My Collections</h4>
        {isCollectionDataLoading ? (
          <p className={kalam300.className}>Loading...</p>
        ) : collections.length >= 1 ? (
          <InfiniteScrollCarousel
            items={collections}
            onItemClick={triggerSearch}
          />
        ) : (
          <p className={kalam300.className}>Create something awesome!</p>
        )}
        <h4 className={kalam700.className}>Activity Feed</h4>
      </StyledCollectionsWrapper>
      <StyledPostsWrapper>
          {results.length > 1 ? results.map(item => <PostItem post={item} key={item.id} />) : ""}
          {photos.length > 1 ? photos.map(photo => <PostItem post={photo} key={photo.id} />) : "Loading..."}
      </StyledPostsWrapper>
      <DropDownButton
        options={[
          { id: 1, label: "Create Collection", action: openDialog },
          { id: 2, label: "Add to Collection", action: openDialog },
        ]}
      />
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
