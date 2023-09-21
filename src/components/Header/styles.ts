import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;

  .logo-section {
    width: 90rem;
    height: 18.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme['base-profile']};

    #logo {
      margin-bottom: 4rem;
    }
    .ellipse1 {
      background: #14589c;
      filter: blur(90px);
      height: 12rem;
      width: 12rem;
      border-radius: 100%;
      opacity: 0.8;
      position: absolute;
      left: 50px;
      top: -60px;
    }
    .ellipse2 {
      background: #14589c;
      filter: blur(90px);
      height: 12rem;
      width: 12rem;
      border-radius: 100%;
      opacity: 0.8;
      position: absolute;
      right: 50px;
      top: -30px;
    }
    .line {
      background: #14589c;
      filter: blur(100px);
      height: 5rem;
      width: 50rem;
      opacity: 0.8;
      position: absolute;
      right: 560px;
      bottom: 500px;
    }
  }
`
