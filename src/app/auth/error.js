'use client';
import { StyledError } from "./Auth.styled";
import Image from "next/image";

const ErrorBoundary = ({error}) => {
    return(
        <StyledError>
            <Image alt="cross-icon" src="/error.svg" width={10} height={10}/>
            <p>{error.message}</p>
        </StyledError>
    )
}

export default ErrorBoundary;