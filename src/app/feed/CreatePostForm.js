import React from 'react'
import Image from 'next/image'
import { StyledCreatePostForm } from './Feed.styled'
import { useForm } from "react-hook-form";
import InputButton from '../components/Buttons/InputButton';

export default function CreatePostForm() {
    const form = useForm();
    const {
        register,
        handleSubmit,
        reset,
    } = form;

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <StyledCreatePostForm onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="post-area">
                <Image src="/user.png" width={30} height={30} alt="user"/>
                <textarea placeholder="What's on your mind?" {...register("bodyMessage")}/>
            </div>
            <div className="form-actions">
                <InputButton
                    value="Post"
                    elementType="submit"
                    backgroundColor="black"
                />
            </div>
        </StyledCreatePostForm>
    )
}
