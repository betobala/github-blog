import { styled } from 'styled-components'

export const CardContainer = styled.div`
  width: 26rem;

  border: 2px solid transparent;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  padding: 2rem;

  display: grid;
  grid-template-areas:
    'h1 span'
    'p p';
  grid-template-columns: 17.69rem auto;
  grid-template-rows: 4rem 7rem;
  row-gap: 1.25rem;

  h1 {
    grid-area: h1;
    font-size: 1.25rem;
    font-weight: 700;

    color: ${(props) => props.theme['base-title']};
  }

  span {
    grid-area: span;
    color: ${(props) => props.theme['base-span']};

    font-size: 0.875rem;
  }

  p {
    grid-area: p;
    height: 6.5rem;
    overflow: hidden;
    color: ${(props) => props.theme['base-text']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
