import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation';
import { setLocalStorage } from "../lib/helpers";

export const useAuth = (apiEndpoint, theData) => {
    const router = useRouter();

    const [responseData, setResponseData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    console.log(theData.code);
    useEffect(() => {
        if(theData.code) {
            const getToken = async () => {
                try {
                    const request = await fetch(apiEndpoint, 
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(theData)
                    });
                    const response = await request.json();
                    if(request.ok) {
                        setLocalStorage('token', response.access_token);
                        setLocalStorage('user', { username: response.username, userId: response.user_id });
                        setResponseData(response);
                        setLoading(false);
                        router.push('/feed');
                    }
                    
                } catch (error) {
                    setError('An error occurred during authentication');
                    setLoading(false);
                }
            }

            getToken();
        }
    },[]);

    return {responseData, loading, error}

}