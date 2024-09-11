import React from 'react';
import { kalam300, kalam400, kalam700 } from "@/lib/fonts";
import { StyledItem } from './Profile.styled';
import Loader from "@/components/Loaders/CustomLoading";
import Image from 'next/image';

export default function ProfileStats(props) {
    const { profileStats } = props;

    return (
        <>
        {profileStats ? (
            <div className="profile">
                <div className="profile-picture">
                    <Image src={profileStats.profile_image?.medium || "/no-thumb.png"} alt="user-profile-picture" width={80} height={80}/>
                </div>
                <div className="profile-details">
                    <div className="profile-name">
                        <span className={kalam700.className}>{profileStats.name}</span>
                        <span className={kalam300.className}>@{profileStats.username || '---'}</span>
                    </div>
                    <div className="profile-stats">
                        <StyledItem>
                            <span className={kalam300.className}>Collections</span>
                            <div className={kalam400.className}>
                                <Image src="/camera.svg" alt="total collections" width={20} height={20}/>
                                <span>
                                    {profileStats.total_collections || 0}
                                </span>
                            </div>
                        </StyledItem>
                        <StyledItem>
                            <span className={kalam300.className}>Score</span>
                            <div className={kalam400.className}>
                                <Image src="/like.svg" alt="total likes" width={20} height={20}/>
                                <span>
                                    {profileStats.total_likes || 0}
                                </span>
                            </div>
                        </StyledItem>
                        <StyledItem>
                            <span className={kalam300.className}>Followers</span>
                            <div className={kalam400.className}>
                                <Image src="/followers.svg" alt="followers" width={20} height={20}/>
                                <span>
                                    {profileStats.followers_count || 0}
                                </span>
                            </div>
                        </StyledItem>
                    </div>
                </div>
            </div>
            ) : <Loader />}
        </>
  )
}
