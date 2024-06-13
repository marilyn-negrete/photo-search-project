'use client'
import { useSearchParams } from 'next/navigation';
import { StyledWrapper } from "./Auth.styled";
import { useAuth } from '@/hooks/useAuth';
import dynamic from 'next/dynamic';

const Loader = dynamic(() => import('@/components/Loaders/CustomLoading'), {
    loading: () => <p>Loading...</p>
  });

const Auth = () => {
    const searchParams = useSearchParams();
    const code = searchParams.get('code'); 
    const {responseData, loading, error} = useAuth(
        `${process.env.UNSPLASH_AUTH_URL}/token`,
        {
            client_id: process.env.UNSPLASH_CLIENT_ID,
            client_secret: process.env.UNSPLASH_CLIENT_SECRET,
            redirect_uri: process.env.REDIRECT_URL,
            code,
            grant_type: 'authorization_code',
        }
        );

    if(error) throw new Error(error)

    return (
        <StyledWrapper>
            { loading ? <Loader /> : null}
        </StyledWrapper>
    );
}

export default Auth;