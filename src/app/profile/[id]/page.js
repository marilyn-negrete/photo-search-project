'use client'
import { useAppContext } from "../../context/AppContext";
import { chewy400, kalam300, kalam400, kalam700 } from "@/lib/fonts";
import Image from "next/image";
import { ProfileWrapper, ProfileContent, StyledItem } from "./Profile.styled";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import('@/components/Loaders/CustomLoading'), {
    loading: () => <p>Loading this in the mean time...</p>
});

export default function Profile() {
    const { user } = useAppContext();

    return (
        <>
            <ProfileWrapper>
                {user ? (
                    <div className="profile">
                    <div className="profile-picture">
                        <Image src={user.profile_image?.medium || "/plain-background.png"} alt="user-profile-picture" width={80} height={80}/>
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
                ) : <Loader />}
            </ProfileWrapper>
            <ProfileContent>
                <h3 className={chewy400.className}>My photos</h3>
            </ProfileContent>
        </>
    )
}