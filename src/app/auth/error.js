'use client';

const ErrorBoundary = ({error}) => {
    return(
        <b>{error.message}</b>
    )
}

export default ErrorBoundary;