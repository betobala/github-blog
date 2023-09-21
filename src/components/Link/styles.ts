import { styled } from 'styled-components'

export const LinksContainer = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  grid-area: link;

  color: ${(props) => props.theme.blue};

  svg {
    width: 0.75rem;
    path {
      fill: ${(props) => props.theme.blue};
    }
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`
