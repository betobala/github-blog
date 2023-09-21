import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  margin-top: -5rem;
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ProfileCard = styled.div`
  padding: 2rem 2.5rem;
  margin-bottom: 4.5rem;
  width: 54rem;
  display: grid;
  grid-template-columns: 10rem 1fr 3rem;
  grid-template-areas:
    'avatar name link'
    'avatar description description'
    'avatar infos infos';
  column-gap: 2rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  color: ${(props) => props.theme['base-text']};

  #avatar {
    grid-area: avatar;
    width: 9.25rem;
    border-radius: 8px;
  }

  #name {
    grid-area: name;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
  }

  #description {
    grid-area: description;
    font-size: 1rem;
  }

  .infos {
    grid-area: infos;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    font-size: 1rem;

    div {
      display: flex;
      align-items: stretch;
      gap: 0.5rem;
    }
  }
`

export const PostsSection = styled.div`
  width: 54rem;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.75rem;

    h1 {
      font-size: 1.125rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.95rem;
    }
  }

  .posts {
    margin-top: 3rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
`
