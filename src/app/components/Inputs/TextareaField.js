import React from 'react'
import { StyledTextarea } from './Input.styled'

export default function TextareaField(props) {
    const { id, label, required, value, handleChange } = props
    
    return (
        <StyledTextarea>  
            <div>
                <label htmlFor={id}>{label}</label>
                <span>{!required ? '(optional)' : null}</span>
            </div>
            <textarea
                id={id}
                required={required}
                onChange={handleChange}
                value={value}
            >
                {value}
            </textarea>
        </StyledTextarea>
  )
}
