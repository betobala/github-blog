import { InputContainer } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  return (
    <InputContainer>
      <input {...rest} type="text" placeholder="Buscar conteúdo" />
    </InputContainer>
  )
}
