'use client';
import { StyledError } from "./Auth.styled";
import Image from "next/image";
import InputButton from "../components/Buttons/InputButton";

const ErrorBoundary = ({error, reset}) => {
    return(
        <StyledError>
            <div>
                <Image alt="icon-error" src="/error.svg" width={10} height={10} />
                <p>{error.message}</p>
            </div>
            <InputButton
                backgroundColor="white"
                value="Try again"
                elementType="button"
                handleOnClick={
                () => reset() // Attempt to recover by trying to re-render the segment
                }
            />
        </StyledError>
    )
}

export default ErrorBoundary;