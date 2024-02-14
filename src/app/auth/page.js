'use client'
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Jua } from 'next/font/google';
import Typography from '../components/Typography/Typography';
import { StyledWrapper } from "./Auth.styled";
import { setLocalStorage } from '../lib/helpers';

// fonts
const jua = Jua({ subsets: ['latin'], weight: '400'});

const Auth = () => {
    const router = useRouter();
    // #2 retrieve value from parameter code of /auth?code=123dkdkd url
    const searchParams = useSearchParams();
    const code = searchParams.get('code'); 

    // this useEffect code block will be executed whenever the the value of code changes.
    useEffect(() => {
        // small validation to ensure the getToken function is only called when the code value exists and is truthy
        if (code) {
            getToken(code);
        }
    }, [code]);

    /*  
        #3 The getToken function makes a post request to the unsplash auth enpoint, the required parameters to get an authentication code are sent within the body. 
        If successful, the unsplash api will respond with an authentication token that we can use in future requests. This token never expires and is stored in the localStorage.
    */

    const getToken = async (codeParam) => {
        try {
            const request = await fetch(
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
                        code: codeParam, // the code param value we retrieve from the url i.g. /auth?code=123
                        grant_type: 'authorization_code',
                    }),
                }
            );

            const response = await request.json();
            // if the requests resolves and the response includes a token we store the data in the localStorage
            if (request.ok && response.access_token) {
                setLocalStorage('token', response.access_token);
                setLocalStorage('userData', { username: response.username, userId: response.user_id });
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

export default Auth;