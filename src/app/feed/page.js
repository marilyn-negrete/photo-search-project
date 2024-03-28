"use client";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { kalam300, kalam700 } from "@/app/lib/fonts";
import { StyledWrapper, StyledPostsWrapper } from "./Feed.styled";
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

  console.log(results, theQuery);
  const triggerSearch = (queryString) => setTheQuery(queryString);

  return (
    <>
      <StyledWrapper>
        <h4 className={kalam700.className}>My Collections</h4>
        {isCollectionDataLoading ? (
          <p className={kalam300.className}>Loading...</p>
        ) : collections.length >= 1 ? (
          <InfiniteScrollCarousel
            items={collections}
            setTheQuery={setTheQuery}
            onItemClick={triggerSearch}
          />
        ) : (
          <p className={kalam300.className}>Create something awesome!</p>
        )}
        <h4 className={kalam700.className}>Activity Feed</h4>
      </StyledWrapper>
      <StyledPostsWrapper>
        {results && results.length > 1
          ? results.map((post) => <PostItem post={post} key={post.id} />)
          : photos.map((item) => <PostItem post={item} key={item.id} />)}
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
