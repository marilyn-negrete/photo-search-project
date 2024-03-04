'use client'
import { ProfileWrapper, ProfileContent } from "./Profile.styled";
import { Kalam, Jua } from 'next/font/google';
import Image from "next/image";

const kalam300 = Kalam({ subsets: ['latin'], weight: '300'});
const kalam400 = Kalam({ subsets: ['latin'], weight: '400'});
const kalam700 = Kalam({ subsets: ['latin'], weight: '700'});
const jua = Jua({ subsets: ['latin'], weight: '400'});

export default function Profile({params}) {

    return (
        <>
            <ProfileWrapper>
                <div className="profile">
                    <div className="profile-picture">
                        <Image src="/user.png" alt="user-profile-picture" width={50} height={50}/>
                    </div>
                    <div className="profile-details">
                        <div className="profile-name">
                            <span className={kalam700.className}>Marilyn Negrete</span>
                            <span className={kalam300.className}>@mnegrete</span>
                        </div>
                        <div className="profile-stats">
                            <div>
                                <span className={kalam300.className}>Photos</span>
                                <span className={kalam400.className}>
                                    *** 20
                                </span>
                            </div>
                            <div>
                                <span className={kalam300.className}>Score</span>
                                <span className={kalam400.className}>
                                    *** 10
                                </span>
                            </div>
                            <div>
                                <span className={kalam300.className}>Followers</span>
                                <span className={kalam400.className}>
                                    *** 200
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </ProfileWrapper>
            <ProfileContent>
                <h3 className={jua.className}>My photos</h3>
            </ProfileContent>
        </>
        
        
    )
}