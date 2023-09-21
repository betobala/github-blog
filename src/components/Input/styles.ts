import { styled } from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  border-radius: 6px;

  &:not(:focus) {
    border: 1px solid ${(props) => props.theme['base-border']};
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-input']};

    color: ${(props) => props.theme['base-text']};
    border: 0;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
    &:focus {
      outline: 0;
    }
    &:focus-within {
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`
