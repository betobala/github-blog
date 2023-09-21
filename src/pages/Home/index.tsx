import { HomeContainer, PostsSection, ProfileCard } from './styles'
import githubIcon from '../../assets/icons/github.svg'
import buildingIcon from '../../assets/icons/building.svg'
import userGroupIcon from '../../assets/icons/user-group.svg'
import avatarImg from '../../assets/avatar.png'
import { Link } from '../../components/Link'
import { Input } from '../../components/Input'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard>
        <img src={avatarImg} alt="" id="avatar" />
        <h1 id="name">Cameron Williamson</h1>
        <Link title="github" />
        <p id="description">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="infos">
          <div className="username">
            <img src={githubIcon} alt="" />
            <span>cameronwll</span>
          </div>
          <div className="company">
            <img src={buildingIcon} alt="" />
            <span>Rocketseat</span>
          </div>
          <div className="followers">
            <img src={userGroupIcon} alt="" />
            <span>32 seguidores</span>
          </div>
        </div>
      </ProfileCard>

      <PostsSection>
        <div className="header">
          <h1>Publicações</h1>
          <span>6 publicações</span>
        </div>
        <Input />

        <div className="posts">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </PostsSection>
    </HomeContainer>
  )
}
