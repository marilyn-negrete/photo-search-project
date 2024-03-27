'use client'
import { useAppContext } from "@/app/context/AppContext";
import { jua400 } from "@/app/lib/fonts";
import { kalam300, kalam400, kalam700 } from "@/app/lib/fonts";
import Image from "next/image";
import { ProfileWrapper, ProfileContent, StyledItem } from "./Profile.styled";

export default function Profile() {
    const { user } = useAppContext();

    return (
        <>
            <ProfileWrapper>
                {user ? (
                    <div className="profile">
                    <div className="profile-picture">
                        <Image src={user.profile_image?.large || ""} alt="user-profile-picture" width={80} height={80}/>
                    </div>
                    <div className="profile-details">
                        <div className="profile-name">
                            <span className={kalam700.className}>{user.name}</span>
                            <span className={kalam300.className}>@{user.username}</span>
                        </div>
                        <div className="profile-stats">
                            <StyledItem>
                                <span className={kalam300.className}>Location</span>
                                <div className={kalam400.className}>
                                    <Image src="/map-pin.png" alt="location_icon" width={20} height={20}/>
                                    <span>
                                        {user.location}
                                    </span>
                                </div>
                            </StyledItem>
                            <StyledItem>
                                <span className={kalam300.className}>Collections</span>
                                <div className={kalam400.className}>
                                    <Image src="/camera_filled.png" alt="collections_icon" width={20} height={20}/>
                                    <span>
                                        {user.total_collections}
                                    </span>
                                </div>
                            </StyledItem>
                            <StyledItem>
                                <span className={kalam300.className}>Followers</span>
                                <div className={kalam400.className}>
                                    <Image src="/followers_filled.png" alt="followers_icon" width={20} height={20}/>
                                    <span>
                                        {user.followers_count}
                                    </span>
                                </div>
                            </StyledItem>
                        </div>
                    </div>
                </div>
                ) : <p className={kalam400.className}>Loading...</p>}
            </ProfileWrapper>
            <ProfileContent>
                <h3 className={jua400.className}>My photos</h3>
            </ProfileContent>
        </>
        
        
    )
}