'use client';
import React from "react";
import { Jua, Kalam } from 'next/font/google';
import Image from "next/image";
import { StyledLink } from "./components/Links/StyledLink.styled";
import { StyledHome, StyledBanner } from "./StyledHome.styled";
import Typography from "./components/Typography/Typography";

// fonts
const jua = Jua({ subsets: ['latin'], weight: '400'});
const kalam = Kalam({ subsets: ['latin'], weight: '300'});

/* 
  #1 This is the authorization URL that directs the user to an external unsplash authorization page(if needed the user has to authenticate/login). The URL is formed with the following required parameters:
  client_id: our api secret key
  redirect_uri: the url we control to handle successfull authorization
  response_type: the access response we are requesting (unique authorization code attached as a parameter in specified redirect_uri)
  scope: a list of requested scopes for our user (e.g. write_collections, update_collections, update_user) 
*/

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
        <Typography className={jua.className} variant="h1" label="PhotoSearch"/>
        <Typography className={kalam.className} label="Find the best photographers in your city"/>
        <StyledLink 
          isRadius={true} 
          className={jua.className} 
          href={authorizationUrl}
          >
            Get Started
        </StyledLink>
      </StyledBanner>
    </StyledHome>
  )
}

export default Home;