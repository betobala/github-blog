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
  cursor: pointer;

  color: ${(props) => props.theme.blue};

  img {
    margin-bottom: 0.2rem;
  }

  svg {
    width: 0.75rem;
    path {
      fill: ${(props) => props.theme.blue};
    }
  }

  &:hover {
    text-decoration: underline;
  }
`
