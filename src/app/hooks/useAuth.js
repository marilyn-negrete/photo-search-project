import { useState, useEffect } from "react"

export const useAuth = (apiEndpoint, theData) => {
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
                    setResponseData(response);
                    setLoading(false);
                } catch (error) {
                    setError('Error fetching data: ' + error.message);
                    setLoading(false);
                }
            }

            getToken();
        }
    },[theData.code, apiEndpoint, theData]);

    return {responseData, loading, error}

}