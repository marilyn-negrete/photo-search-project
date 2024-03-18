import { StyledPostItem } from './Feed.styled';
import Image from 'next/image';
import moment from 'moment';
import { Kalam } from 'next/font/google';

// fonts
const kalam700 = Kalam({ subsets: ['latin'], weight: '700'});
const kalam300 = Kalam({ subsets: ['latin'], weight: '300'});

const PostItem = (props) => {
    const { post } = props;

  return (
     <StyledPostItem className="post" key={post.id}>
        <div className="post-header">
            <Image 
                src={post.user?.profile_image.large || '/plain-background.png'} 
                width={50} 
                height={50} 
                alt="user-photo"
                placeholder='blur'
                blurDataURL='/plain-background.png'
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
                src={post.urls?.full || "/plain-background.png"} 
                width={50} 
                height={50} 
                alt={post.alt_description || "placeholder image"}
                placeholder='blur'
                blurDataURL='/plain-background.png'
            />
        </div>
    </StyledPostItem>
  )
}

export default PostItem;
