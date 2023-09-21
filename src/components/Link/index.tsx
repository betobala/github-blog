import { LinksContainer } from './styles'
import linkIcon from '../../assets/icons/linkIcon.svg'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string
}

export function Link({ title, ...rest }: LinkProps) {
  return (
    <LinksContainer {...rest}>
      <span>{title}</span>
      <img src={linkIcon} alt="" />
    </LinksContainer>
  )
}
