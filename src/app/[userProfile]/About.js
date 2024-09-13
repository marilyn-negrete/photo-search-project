import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { kalam300, kalam700 } from "@/lib/fonts";
import { StyledAbout } from './Profile.styled';
import ProfileStats from './ProfileStats';

export default function About(props) {
    const { profileData } = props;
    const [stats, setStats] = useState({
        total_collections: profileData.total_collections || 0,
        total_likes: profileData.total_likes || 0,
        followers_count: profileData.followers_count || 0
    });

    return (
        <StyledAbout>
            <div className="profile-picture">
                <Image src={profileData.profile_image?.medium || "/no-thumb.png"} alt="user-profile-picture" width={80} height={80}/>
            </div>
            <div className="profile-bio">
                <div className="profile-name">
                    <span className={kalam700.className}>{profileData.name}</span>
                    <span className={kalam300.className}>@{profileData.username || '---'}</span>
                </div>
                <p className={kalam300.className}>{profileData.bio}</p>
                <ProfileStats stats={stats}/>
            </div>
        </StyledAbout>
    )
}
