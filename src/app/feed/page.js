"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useAppContext } from "../context/AppContext";
import { useSearch } from "@/hooks/useSearch";
import { StyledPostsWrapper } from "./Feed.styled";
import Dialog from "@/components/Dialog/Dialog"
import PostItem from "./PostItem";
import DropDownButton from "@/components/Buttons/DropDownButton";
import CollectionsList from "./CollectionsList";
import { kalam300 } from "@/lib/fonts";
import InputButton from "@/components/Buttons/InputButton";

const TheCreateCollectionForm = dynamic(() => import("./CreateCollectionForm"));
const TheAddPhotoForm = dynamic(() => import("./AddPhotoForm"));

const Feed = () => {
  const { photos, collections } = useAppContext();
  const [theQuery, setTheQuery] = useState("");
  const [results, loading, error] = useSearch(theQuery);
  const [dialog, setDialog] = useState({
    isOpen: false,
    title: "",
  });

  const closeDialog = () => setDialog(prevState => ({ ...prevState, isOpen: false }));
  const openDialog = (title) => setDialog({ title, isOpen: true });
  const triggerSearch = (queryString) => setTheQuery(queryString);

  return (
    <>
      <CollectionsList
        collections={collections.results}
        triggerSearch={triggerSearch}
      />
      <StyledPostsWrapper>
        {results.length > 0 &&
          results.map((item) => <PostItem post={item} key={item.id} />)}

        {photos.results.length > 0 ? (
          photos.results.map((photo, index) => (
            <PostItem post={photo} key={photo.id} indexValue={index} />
          ))
        ) : (
          <p className={kalam300.className}>Loading...</p>
        )}

        {photos.results.length > 0 ? (
          <InputButton
            elementType="button"
            value="Load more posts"
            backgroundColor="white"
            id="loadMorePosts"
            name="loadMorePosts"
            handleOnClick={() => console.log("load 5 more posts")}
          />
        ) : null}
      </StyledPostsWrapper>
      <DropDownButton
        options={[
          { id: 1, label: "Create Collection", action: () => openDialog("Create Collection") },
          { id: 2, label: "Add to Collection", action: () => openDialog("Add to Collection") },
        ]}
      />
      <Dialog dialog={dialog} closeDialog={closeDialog}>
        {dialog.title === "Create Collection" && <TheCreateCollectionForm closeDialog={closeDialog}/>}
        {dialog.title === "Add to Collection" && <TheAddPhotoForm />}
      </Dialog>
    </>
  );
};

export default Feed;
