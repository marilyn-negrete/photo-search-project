"use client";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { getJWToken } from "../lib/helpers";
import { Kalam } from "next/font/google";
import { StyledWrapper, StyledPostsWrapper } from "./Feed.styled";
import InfiniteScrollCarousel from "../components/Carousel/InfniteScrollCarousel";
import Dialog from "../components/Dialog/Dialog";
import CreateCollectionForm from "./CreateCollectionForm";
import CreatePostForm from "./CreatePostForm";
import PostItem from "./PostItem";
import DropDownButton from "../components/Buttons/DropDownButton";

// fonts
const kalam700 = Kalam({ subsets: ["latin"], weight: "700" });
const kalam300 = Kalam({ subsets: ["latin"], weight: "300" });

const Feed = () => {
  const { photos, collections, isCollectionDataLoading } = useAppContext();
  const [filteredResults, setFilteredResults] = useState([]);
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

  useEffect(() => {
    setFilteredResults([...photos]);
  },[photos])

  const performSearch = async (query) => {
    try {
      const response = await fetch(
        `${process.env.API_URL}/search/photos?query=${query}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: getJWToken(),
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setFilteredResults(data.results);
    } catch (error) {
      throw new Error("Error fetching data:", error);
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
              onItemClick={performSearch}
            />
          ) : (
            <p className={kalam300.className}>Create something awesome!</p>
          )}
        </div>
        <h4 className={kalam700.className}>Activity Feed</h4>
      </StyledWrapper>
      <StyledPostsWrapper>
        {filteredResults && filteredResults.length > 1 ? (
          filteredResults.map((post) => <PostItem post={post} key={post.id} />)
        ) : (
          <p className={kalam300.className}>Working on it...</p>
        )}
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
