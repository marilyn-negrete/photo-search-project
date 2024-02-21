import React from 'react'
import Link from 'next/link';

 const NotFound = () => {
  return (
    <div>
        <p>
            404 not-found
        </p>
       <Link href="/feed">Take me back home</Link>
    </div>
  )
}

export default NotFound;