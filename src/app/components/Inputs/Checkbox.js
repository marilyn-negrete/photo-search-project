import { CheckboxWrapper } from "./Input.styled";

const Checkbox = (props) => {
    const { label, id, handleCheckbox } = props;

  return (
    <CheckboxWrapper>
        <input type="checkbox" id={id} name={id} label={label} onChange={handleCheckbox}/>
        <label htmlFor={label}>{label}</label>
    </CheckboxWrapper>
  )
}

export default Checkbox;