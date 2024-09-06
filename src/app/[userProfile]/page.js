'use client'
import { chewy400, kalam300, kalam400, kalam700 } from "@/lib/fonts";
import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";
import Loader from "@/components/Loaders/CustomLoading";
import { ProfileWrapper, ProfileContent, StyledItem } from "./Profile.styled";
import Card from "@/components/Cards/Card";
import InputButton from "@/components/Buttons/InputButton";

export default function Profile({ params }) {
    const profileId = params.userProfile;
    const [data, error, loading] = useFetch(`${process.env.API_URL}/users/${profileId}`, "no-cache");
    const [userCollections, userCollectionsError, userCollectionsLoading] = useFetch(`${process.env.API_URL}/users/${profileId}/collections?per_page=4`, "no-cache");
    
    return (
        <>
            <ProfileWrapper>
                {data ? (
                    <div className="profile">
                    <div className="profile-picture">
                        <Image src={data.profile_image?.medium || "/no-thumb.png"} alt="user-profile-picture" width={80} height={80}/>
                    </div>
                    <div className="profile-details">
                        <div className="profile-name">
                            <span className={kalam700.className}>{data.name}</span>
                            <span className={kalam300.className}>@{data.username || '---'}</span>
                        </div>
                        <div className="profile-stats">
                            <StyledItem>
                                <span className={kalam300.className}>Collections</span>
                                <div className={kalam400.className}>
                                    <Image src="/camera.svg" alt="total collections" width={20} height={20}/>
                                    <span>
                                        {data.total_collections || 0}
                                    </span>
                                </div>
                            </StyledItem>
                            <StyledItem>
                                <span className={kalam300.className}>Score</span>
                                <div className={kalam400.className}>
                                    <Image src="/like.svg" alt="total likes" width={20} height={20}/>
                                    <span>
                                        {data.total_likes || 0}
                                    </span>
                                </div>
                            </StyledItem>
                            <StyledItem>
                                <span className={kalam300.className}>Followers</span>
                                <div className={kalam400.className}>
                                    <Image src="/followers.svg" alt="followers" width={20} height={20}/>
                                    <span>
                                        {data.followers_count || 0}
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
                    <h3 className={chewy400.className}>My photos ({data.total_collections || 0})</h3>
                    <div className="collections-list">
                        {userCollections.length ? userCollections.map(collection => {
                            return <Card key={collection.id} data={collection} />
                        }) : "This user doesn't have collections created yet"}
                    </div>

                    { data.total_collections > 5 ? 
                        <InputButton 
                            id="loadMoreCollections" 
                            name="loadMoreCollections" 
                            handleOnClick={() => 'load more collections'} 
                            value="Load more" 
                            elementType="button" 
                            backgroundColor="white" 
                            disabled={false} 
                        /> 
                    : null }
                </ProfileContent>
                : ''
            }
            
        </>
    )
}