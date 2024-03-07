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
    <StyledCreateCollectionForm onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="field">
            <label>Title</label>
            <input
                type="text"
                id="title"
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
            <label>
                Description
                <span className="is-optional">(optional)</span>
            </label>
            <input
                type="text"
                id="description"
                {...register("description")}
            />
        </div>
        <div className="field private">
            <input type="checkbox" id="private" {...register("private")} />
            <label>Make collection private</label>
        </div>
        <div className="form-actions">
            <InputButton
                value="save"
                elementType="submit"
                backgroundColor="black"
            />
        </div>
    </StyledCreateCollectionForm>
  )
}
