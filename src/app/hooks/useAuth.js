import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation';
import { setLocalStorage } from "@/lib/helpers";
import { useAppContext } from "context/AppContext";

export const useAuth = (apiEndpoint, theData) => {
    const router = useRouter();
    const { setLoggedUser } = useAppContext();
    const [responseData, setResponseData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
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
                        setLocalStorage('loggedUser', { username: response.username, userId: response.user_id });
                        setLoggedUser({ username: response.username, userId: response.user_id });
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