import React from 'react'
import Image from 'next/image'
import { StyledCreatePostForm } from './Feed.styled'
import { useForm } from "react-hook-form";
import InputButton from '../components/Buttons/InputButton';
import { useAppContext } from '../context/AppContext';

export default function CreatePostForm() {
    const { user } = useAppContext();
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
                <div className="field message">
                    <Image src={user.profile_image?.large} width={40} height={40} alt="user"/>
                    <textarea placeholder="What's on your mind?" {...register("bodyMessage")}/>
                </div>
                <div className="field search">
                    <label hidden={true} htmlFor="search">Search</label>
                    <input id="search" name="search" {...register("search")} placeholder="search a photo"/>
                </div>
            </div>
            <div className="form-actions">
                <InputButton
                    disabled={true}
                    value="Post"
                    elementType="submit"
                    backgroundColor="black"
                />
            </div>
        </StyledCreatePostForm>
    )
}
