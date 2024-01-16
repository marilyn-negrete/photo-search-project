'use client'
import { collections } from "../lib/collections";
import InfiniteScrollCarousel from "../components/Carousel/InfniteScrollCarousel";

export default function Page() {
    return (
        <InfiniteScrollCarousel theCollections={collections}/>
    )
}