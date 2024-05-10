import { StyledPostItem } from './Feed.styled';
import Image from 'next/image';
import moment from 'moment';
import { kalam700, kalam300 } from "@/app/lib/fonts";

const PostItem = (props) => {
  const { post, indexValue } = props;

  return (
     <StyledPostItem className="post" key={post.id}>
        <div className="post-header">
            <Image 
                src={post.user?.profile_image.medium || '/plain-background.png'} 
                width={50} 
                height={50} 
                alt="user-photo"
                priority={indexValue === 0}
            />
            <div>
                <p className={kalam700.className}>{post.user?.first_name} {post.user?.last_name || ""}</p>
                <p className={kalam300.className}>{moment(post.created_at).startOf('day').fromNow()} in {post.user?.location}</p>
            </div>
        </div>
        <div className="post-body">
            <p className={kalam300.className}>
                {post.description || "Lorem ipsum dolor sit amet consectetur adipiscing elit eros at, leo varius imperdiet mi ultric"}
            </p>
            <Image 
                src={`${post.urls?.raw + "&auto=compress"}` || "/plain-background.png"} 
                width={480} 
                height={480} 
                alt={post.alt_description || "placeholder image"}
                placeholder='blur'
                blurDataURL={post.blur_hash || '/plain-background.png'}
                priority={indexValue === 0}
            />      
        </div>
    </StyledPostItem>
  )
}

export default PostItem;
