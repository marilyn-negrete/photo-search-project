'use client'
import { useSearchParams } from 'next/navigation';
import { Jua } from 'next/font/google';
import { StyledWrapper } from "./Auth.styled";
import { useAuth } from '../hooks/useAuth';

// fonts
const jua = Jua({ subsets: ['latin'], weight: '400'});

const Auth = () => {
    const searchParams = useSearchParams();
    const code = searchParams.get('code'); 
    const {responseData, loading, error} = useAuth(
        `${process.env.UNSPLASH_AUTH_URL}/tokens`,
        {
            client_id: process.env.UNSPLASH_CLIENT_ID,
            client_secret: process.env.UNSPLASH_CLIENT_SECRET,
            redirect_uri: process.env.REDIRECT_URL,
            code: code,
            grant_type: 'authorization_code',
        }
        );

    if(error) throw new Error(error)

    return (
        <StyledWrapper>
            { loading ? <h3 className={jua.className}>Loading...</h3> : null}
        </StyledWrapper>
    );
}

export default Auth;