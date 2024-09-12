import styled from "styled-components";

export const TextFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    div {
        display: flex;
        label {
            margin-right: .25rem;
        }

        span {
            color: #767676;
        }
    }

    input {
        padding: 0.75rem;
        border-radius: 4px;
        border: 1px solid;
        margin: 0.5rem 0;
    }
`;

export const CheckboxWrapper = styled.div`
    input[type="checkbox"] {
        margin-right: .5rem;
    }
`;

export const StyledTextarea = styled.div`
    div {
        display: flex;
        label {
            margin-right: .25rem;
        }

        span {
            color: #767676;
        }
    }

    textarea {
        width: 100%;
        height: 5rem;
        padding: 0.75rem;
        border-radius: 4px;
        border: 1px solid;
        margin: 0.5rem 0;

    }
`;