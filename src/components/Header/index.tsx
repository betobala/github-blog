import { HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'
import RightSideEffect from '../../assets/headerEffects/rightSideEffect.svg'
import LeftSideEffect from '../../assets/headerEffects/leftSideEffect.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="blank"></div>
      <div className="logo-section">
        <img src={LeftSideEffect} alt="" />
        <img src={Logo} alt="" id="logo" />
        <img src={RightSideEffect} alt="" />
      </div>
    </HeaderContainer>
  )
}
