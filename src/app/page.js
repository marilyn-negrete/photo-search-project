'use client';
import React from "react";
import { jua400, kalam300 } from "@/lib/fonts";
import Image from "next/image";
import { StyledLink } from "@/components/Links/StyledLink.styled";
import { StyledHome, StyledBanner } from "./Home.styled";

const authorizationUrl = `${process.env.UNSPLASH_AUTH_URL}/authorize?client_id=${process.env.UNSPLASH_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}&response_type=code&scope=${process.env.PERMISSION_SCOPES}`; 

const Home = () => {
  return (
    <StyledHome>
       <Image
        src="/photography-thumbnail.jpeg"
        alt="Thumbnail"
        layout="fill"
        quality={100}
        fill
        sizes="100vw"
        priority
      />
      <StyledBanner>
        <h1 className={jua400.className}>PhotoSearch</h1>
        <p className={kalam300.className}>Find the best photographers in your city</p>
        <StyledLink 
          className={`${jua400.className} radius`} 
          href={authorizationUrl}
          >
            Get Started
        </StyledLink>
      </StyledBanner>
    </StyledHome>
  )
}

export default Home;