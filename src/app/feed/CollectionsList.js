import React from "react";
import { StyledCollectionsWrapper } from "./Feed.styled";
import InfiniteScrollCarousel from "@/components/Carousel/InfniteScrollCarousel";
import { kalam700, kalam300 } from "@/lib/fonts";

const CollectionsList = (props) => {
  const { collections, triggerSearch } = props;

  return (
    <StyledCollectionsWrapper>
      <h4 className={kalam700.className}>My Collections</h4>
      {collections.length > 0 ? (
        <InfiniteScrollCarousel
          items={collections}
          handleClick={triggerSearch}
        />
      ) : (
        <p className={kalam300.className}>Hang tight...</p>
      )}
    </StyledCollectionsWrapper>
  );
}

export default CollectionsList;