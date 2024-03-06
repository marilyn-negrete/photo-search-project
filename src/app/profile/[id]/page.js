'use client'
import { useFetch } from "@/app/hooks/useFetch";
import { ProfileWrapper, ProfileContent } from "./Profile.styled";
import { Kalam, Jua } from 'next/font/google';
import Image from "next/image";

const kalam300 = Kalam({ subsets: ['latin'], weight: '300'});
const kalam400 = Kalam({ subsets: ['latin'], weight: '400'});
const kalam700 = Kalam({ subsets: ['latin'], weight: '700'});
const jua = Jua({ subsets: ['latin'], weight: '400'});

export default function Profile({params}) {
    const {data, error, loading} = useFetch(`https://api.unsplash.com/users/mna96`);

    return (
        <>
            <ProfileWrapper>
                {data ? (
                    <div className="profile">
                    <div className="profile-picture">
                        <Image src="/user.png" alt="user-profile-picture" width={100} height={100}/>
                    </div>
                    <div className="profile-details">
                        <div className="profile-name">
                            <span className={kalam700.className}>{data.name}</span>
                            <span className={kalam300.className}>@{data.username}</span>
                        </div>
                        <div className="profile-stats">
                            <div>
                                <span className={kalam300.className}>Location</span>
                                <span className={kalam400.className}>
                                    *** {data.location}
                                </span>
                            </div>
                            <div>
                                <span className={kalam300.className}>Collections</span>
                                <span className={kalam400.className}>
                                    *** {data.total_collections}
                                </span>
                            </div>
                            <div>
                                <span className={kalam300.className}>Followers</span>
                                <span className={kalam400.className}>
                                    *** {data.followers_count}
                                </span>
                            </div>
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