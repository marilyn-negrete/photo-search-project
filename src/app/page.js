'use client';
import React from "react";
import { Jua, Kalam } from 'next/font/google';
import Image from "next/image";
import { StyledLink } from "./components/Links/StyledLink.styled";
import { StyledHome, StyledBanner } from "./Home.styled";

const authorizationUrl = `${process.env.UNSPLASH_AUTH_URL}/authorize?client_id=${process.env.UNSPLASH_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}&response_type=code&scope=${process.env.PERMISSION_SCOPES}`; 

const Home = () => {
  return (
    <StyledHome>
      <Image
        src="/photography-thumbnail.jpeg"
        alt="Thumbnail"
        layout="fill"
        objectFit="cover"
      />
      <StyledBanner>
        <h1 className={jua.className}>PhotoSearch</h1>
        <p className={kalam.className}>Find the best photographers in your city</p>
        <StyledLink 
          className={`${jua.className} radius`} 
          href={authorizationUrl}
          >
            Get Started
        </StyledLink>
      </StyledBanner>
    </StyledHome>
  )
}

export default Home;