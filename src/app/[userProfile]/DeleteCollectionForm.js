import React from 'react'

export default function DeleteCollectionForm(props) {
    const { collection, handleSubmit } = props;

    return (
        <div>
            <p>Confirm you want to delete Collection {collection.title}</p>

            <form onSubmit={handleSubmit}>
                <input type="submit" value="Delete" />
            </form> 
        </div>
    )
}
