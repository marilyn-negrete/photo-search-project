'use client'
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      getToken();
    }
  }, [code]);

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
                code: code,
                grant_type: 'authorization_code',
              }),
            }
          );

          const data = await response.json();
          if(data.access_token){
            window.localStorage.setItem('token', data.access_token);
            router.push('/feed');
          }
          
    } catch (error) {
        console.log(error);
    }
  };

  return <>Loading...</>;
}
