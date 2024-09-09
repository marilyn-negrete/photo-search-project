import React from 'react'

export default function ShareCollection(props) {
    const { collection } = props;

    return (
        <div>Share link! {collection.shareLink}</div>
    )
}
