import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { kalam300, kalam700 } from "@/lib/fonts";
import { StyledAbout } from './Profile.styled';
import ProfileStats from './ProfileStats';

export default function About({ userProfile }) {
    return (
        <StyledAbout>
            <div className="profile-picture">
                <Image src={userProfile.profile_image || "/no-thumb.png"} alt="user-profile-picture" width={80} height={80}/>
            </div>
            <div className="profile-bio">
                <div className="profile-name">
                    <span className={kalam700.className}>{userProfile.first_name} {userProfile.last_name}</span>
                    <span className={kalam300.className}>@{userProfile.username || '---'}</span>
                </div>
                <p className={kalam300.className}>{userProfile.bio}</p>
                <ProfileStats userProfile={userProfile}/>
            </div>
        </StyledAbout>
    )
}
