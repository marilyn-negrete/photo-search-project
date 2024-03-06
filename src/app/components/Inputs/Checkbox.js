import { CheckboxWrapper } from "./Input.styled";

const Checkbox = (props) => {
    const { label, id, handleCheckbox } = props;

  return (
    <CheckboxWrapper>
        <input type="checkbox" {...props} />
        <label htmlFor={label}>{label}</label>
    </CheckboxWrapper>
  )
}

export default Checkbox;