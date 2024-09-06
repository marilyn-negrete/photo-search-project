'use client'
import { chewy400, kalam300, kalam400, kalam700 } from "@/lib/fonts";
import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";
import Loader from "@/components/Loaders/CustomLoading";
import { ProfileWrapper, ProfileContent, StyledItem } from "./Profile.styled";
import Card from "@/components/Cards/Card";

export default function Profile({ params }) {
    const profileId = params.userProfile;
    const [data, error, loading] = useFetch(`${process.env.API_URL}/users/${profileId}`, "no-cache");
    const [userCollections, userCollectionsError, userCollectionsLoading] = useFetch(`${process.env.API_URL}/users/${profileId}/collections?per_page=5`, "no-cache");
    
    console.log(data, '-----d');
    
    return (
        <>
            <ProfileWrapper>
                {data ? (
                    <div className="profile">
                    <div className="profile-picture">
                        <Image src={data.profile_image?.medium || "/plain-background.png"} alt="user-profile-picture" width={80} height={80}/>
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
                ) : <Loader />}
            </ProfileWrapper>
            
            {data ? 
                <ProfileContent>
                    <h3 className={chewy400.className}>My photos ({data.total_collections})</h3>
                    <div className="collections-list">
                        {userCollections.length ? userCollections.map(collection => {
                            return <Card key={collection.id} data={collection} />
                        }) : "This user doesn't have collections created yet"}
                    </div>

                    <span>Load more</span>
                </ProfileContent>
                : ''
            }
            
        </>
    )
}