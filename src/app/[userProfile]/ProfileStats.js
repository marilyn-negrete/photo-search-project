import React from 'react'
import { StyledStats } from './Profile.styled';
import { kalam300, kalam400 } from "@/lib/fonts";
import Image from 'next/image';

export default function stats(props) {
    const { stats } = props;

    return (
        <StyledStats className="profile-stats">
            <div className="item">
                <span className={kalam300.className}>Collections</span>
                <div className={kalam400.className}>
                    <Image src="/camera.svg" alt="total collections" width={20} height={20}/>
                    <span>
                        {stats.total_collections || 0}
                    </span>
                </div>
            </div>
            <div className="item">
                <span className={kalam300.className}>Score</span>
                <div className={kalam400.className}>
                    <Image src="/like.svg" alt="total likes" width={20} height={20}/>
                    <span>
                        {stats.total_likes || 0}
                    </span>
                </div>
            </div>
            <div className="item">
                <span className={kalam300.className}>Followers</span>
                <div className={kalam400.className}>
                    <Image src="/followers.svg" alt="followers" width={20} height={20}/>
                    <span>
                        {stats.followers_count || 0}
                    </span>
                </div>
            </div>
        </StyledStats>
    )
}
