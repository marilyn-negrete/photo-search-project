'use client'
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Jua } from 'next/font/google';
import Typography from '../components/Typography/Typography';
import { StyledWrapper } from "./Auth.styled";
import { setLocalStorage } from '../lib/helpers';
import { useAuth } from '../hooks/useAuth';

// fonts
const jua = Jua({ subsets: ['latin'], weight: '400'});

const Auth = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const code = searchParams.get('code'); 
    const {responseData, loading, error} = useAuth(
        `${process.env.UNSPLASH_AUTH_URL}/token`,
        {
            client_id: process.env.UNSPLASH_CLIENT_ID,
            client_secret: process.env.UNSPLASH_CLIENT_SECRET,
            redirect_uri: process.env.REDIRECT_URL,
            code: code, // the code param value we retrieve from the url i.g. /auth?code=123
            grant_type: 'authorization_code',
        }
        );

    useEffect(() => {
        if(responseData.access_token) {
            setLocalStorage('token', responseData.access_token);
            setLocalStorage('userData', { username: responseData.username, userId: responseData.user_id });
            // allowing user access to phorot search feed after authorization flow is completed
            router.push('/feed');
        }  else if (error) {
            throw new Error('An error occurred during authentication')
        }
    }, [responseData.access_token, responseData.username, responseData.user_id, error, router]);

    return (
        <StyledWrapper>
            {/* Rendering Loader in UI while authorization flow is running in the background */}
            { loading ? <Typography label="Loading..." variant="h3" className={jua.className}/> : null}
        </StyledWrapper>
    );
}

export default Auth;