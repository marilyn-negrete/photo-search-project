import React, { useState } from 'react'
import { StyledCreateCollectionForm } from './Feed.styled'
import InputButton from '../components/Buttons/InputButton'
import { useForm } from "react-hook-form";
import { postNewCollection } from '../lib/collections';

export default function CreateCollectionForm(props) {
    const { closeDialog } = props;
    const [theCollection, setTheCollection] = useState({
        title: "",
        description: "",
        private: false,
    });
    const form = useForm();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = form;

    const onSubmit = (data) => {
        setTheCollection({ ...data });
        postNewCollection(data);
        closeDialog();
        reset();
    };

  return (
    <StyledCreateCollectionForm onSubmit={handleSubmit(onSubmit)} noValidate method="post">
        <div className="field">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                name="title"
                placeholder="Beautiful photos"
                maxLength={60}
                {...register("title", {
                required: "Title is required",
                minLength: {
                    value: 2,
                    message: "Title is too short",
                },
                })}
            />
            <span className="is-required">{errors.title?.message}</span>
        </div>
        <div className="field">
            <label htmlFor="description">
                Description
                <span className="is-optional">(optional)</span>
            </label>
            <textarea
                id="description"
                name="description"
                placeholder="Get inspired..."
                rows={5}
                {...register("description")}
            ></textarea>
        </div>
        <div className="field private">
            <input 
                type="checkbox" 
                id="private"
                name="private"
                {...register("private")} 
            />
            <label htmlFor="private">Make collection private</label>
        </div>
        <div className="form-actions">
            <InputButton
                id="save"
                name="save"
                value="save"
                elementType="submit"
                backgroundColor="black"
            />
        </div>
    </StyledCreateCollectionForm>
  )
}
