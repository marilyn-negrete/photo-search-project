'use client'
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Jua } from 'next/font/google';
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
            code: code,
            grant_type: 'authorization_code',
        }
        );

    useEffect(() => {
        if(responseData.access_token) {
            setLocalStorage('token', responseData.access_token);
            router.push('/feed');
        }  else if (error) {
            throw new Error('An error occurred during authentication')
        }
    }, [responseData.access_token, responseData.username, responseData.user_id, error, router]);

    return (
        <StyledWrapper>
            { loading ? <h4 className={jua.className}>Loading...</h4> : null}
        </StyledWrapper>
    );
}

export default Auth;