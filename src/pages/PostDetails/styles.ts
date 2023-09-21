import styled from 'styled-components'

export const PostDetailsContainer = styled.div`
  margin-top: -5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Info = styled.div`
  padding: 2rem;
  width: 54rem;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 38rem;

    margin-bottom: 1.25rem;

    #return-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      text-decoration: none;
    }
  }

  #name {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .infos {
    grid-area: infos;

    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: ${(props) => props.theme['base-span']};

    font-size: 1rem;

    div {
      display: flex;
      align-items: stretch;
      gap: 0.5rem;
    }
  }
`
export const Details = styled.div`
  width: 54rem;
  padding: 2rem 2.5rem;
`
