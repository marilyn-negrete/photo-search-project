'use client'
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Jua } from 'next/font/google';
import Typography from '../components/Typography/Typography';
import { StyledWrapper } from "./Auth.styled";
import { setLocalStorage } from '../lib/helpers';

// fonts
const jua = Jua({ subsets: ['latin'], weight: '400'});

const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const code = searchParams.get('code');

    // ensure the effect is only trigger whenever the value of code changes
    useEffect(() => {
        // the if statement here ensures the getToken function is only called when the code value exists and is truthy
        if (code) {
            getToken();
        }
    }, [code]);

    /*
        The getToken function makes a post request to the unsplash auth enpoint, the required parameters to get an authentication code are sent within the body. 
        If successful, the unsplash api will respond with an authentication token that we can use in future requests. This token never expires and is stored in the localStorage.
    */

    const getToken = async () => {
        try {
            const response = await fetch(
                `${process.env.UNSPLASH_AUTH_URL}/token`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        client_id: process.env.UNSPLASH_CLIENT_ID,
                        client_secret: process.env.UNSPLASH_CLIENT_SECRET,
                        redirect_uri: process.env.REDIRECT_URL,
                        code: code, // the code param value we retrieve from the url i.g. /auth?code=123
                        grant_type: 'authorization_code',
                    }),
                }
            );

            const data = await response.json();
            if (data.access_token) {
                // setLocalStorage is a helper function that stores the token and userData in the localStorage
                setLocalStorage('token', data.access_token);
                setLocalStorage('userData', { username: data.username, userId: data.user_id });
                // allowing user access to phorot search feed after authorization flow is completed
                router.push('/feed');
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <StyledWrapper>
            {/* Rendering Loader in UI while authorization flow is running in the background */}
            <Typography label="Loading..." variant="h3" className={jua.className}/>
        </StyledWrapper>
    );
}

export default Page;