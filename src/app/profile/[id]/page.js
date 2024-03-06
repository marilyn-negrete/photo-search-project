'use client'
import { useFetch } from "@/app/hooks/useFetch";
import { ProfileWrapper, ProfileContent, StyledItem } from "./Profile.styled";
import { Kalam, Jua } from 'next/font/google';
import Image from "next/image";

const kalam300 = Kalam({ subsets: ['latin'], weight: '300'});
const kalam400 = Kalam({ subsets: ['latin'], weight: '400'});
const kalam700 = Kalam({ subsets: ['latin'], weight: '700'});
const jua = Jua({ subsets: ['latin'], weight: '400'});

export default function Profile({params}) {
    const {data, error, loading} = useFetch(`https://api.unsplash.com/users/mna96`);

    console.log(data);
    return (
        <>
            <ProfileWrapper>
                {data ? (
                    <div className="profile">
                    <div className="profile-picture">
                        <Image src={data.profile_image.large} alt="user-profile-picture" width={80} height={80}/>
                    </div>
                    <div className="profile-details">
                        <div className="profile-name">
                            <span className={kalam700.className}>{data.name}</span>
                            <span className={kalam300.className}>@{data.username}</span>
                        </div>
                        <div className="profile-stats">
                            <StyledItem>
                                <span className={kalam300.className}>Location</span>
                                <div className={kalam400.className}>
                                    <Image src="/map-pin.png" alt="location_icon" width={20} height={20}/>
                                    <span>
                                        {data.location}
                                    </span>
                                </div>
                            </StyledItem>
                            <StyledItem>
                                <span className={kalam300.className}>Collections</span>
                                <div className={kalam400.className}>
                                    <Image src="/camera_filled.png" alt="collections_icon" width={20} height={20}/>
                                    <span>
                                        {data.total_collections}
                                    </span>
                                </div>
                            </StyledItem>
                            <StyledItem>
                                <span className={kalam300.className}>Followers</span>
                                <div className={kalam400.className}>
                                    <Image src="/followers_filled.png" alt="followers_icon" width={20} height={20}/>
                                    <span>
                                        {data.followers_count}
                                    </span>
                                </div>
                            </StyledItem>
                        </div>
                    </div>
                </div>
                ) : <p className={kalam400.className}>Loading...</p>}
            </ProfileWrapper>
            <ProfileContent>
                <h3 className={jua.className}>My photos</h3>
            </ProfileContent>
        </>
        
        
    )
}