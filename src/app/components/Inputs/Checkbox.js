import { CheckboxWrapper } from "./Input.styled";

const Checkbox = (props) => {
    const { checked, handleChange, label, id } = props;

    return (
        <CheckboxWrapper>
            <input
                id={id}
                type="checkbox" 
                onChange={handleChange}
                checked={checked}
            />
            <label htmlFor={label}>{label}</label>
        </CheckboxWrapper>
    )
}

export default Checkbox;