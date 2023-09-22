import { formatDistanceToNowStrict } from 'date-fns'
import { CardContainer } from './styles'
import { ptBR } from 'date-fns/locale'

interface CardProps {
  title: string
  body: string
  createdAt: Date
  number: number
}

export function Card({ title, body, createdAt, number }: CardProps) {
  return (
    <CardContainer to={`/details/${number}`}>
      <h1>{title}</h1>
      <span>
        {formatDistanceToNowStrict(new Date(createdAt), {
          addSuffix: true,
          locale: ptBR,
        })}
      </span>
      <p>{body}</p>
    </CardContainer>
  )
}
