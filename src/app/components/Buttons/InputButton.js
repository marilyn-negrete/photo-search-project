const InputButton = (props) => {
    const { handleOnClick, value, elementType } = props;

    return (
        elementType === 'submit' 
        ? <input value={value} type={elementType} /> 
        : <input value={value} type={elementType} onClick={handleOnClick}/>
        )
}

export default InputButton;