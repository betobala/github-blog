import { HomeContainer, PostsSection, ProfileCard } from './styles'
import githubIcon from '../../assets/icons/github.svg'
import buildingIcon from '../../assets/icons/building.svg'
import userGroupIcon from '../../assets/icons/user-group.svg'
import { Link } from '../../components/Link'
import { Input } from '../../components/Input'
import { Card } from '../../components/Card'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

interface UserProps {
  name: string
  avatar_url: string
  login: string
  bio: string
  company: string
  followers: number
}

interface IssueProps {
  title: string
  body: string
  created_at: Date
  number: number
}

export function Home() {
  const [user, setUser] = useState<UserProps>()
  const [issues, setIssues] = useState<IssueProps[]>([])
  const [search, setSearch] = useState('')
  const username = 'betobala'
  const repo = 'github-blog'
  const postsAmount = issues.length > 1 ? 'publicações' : 'publicação'

  useEffect(() => {

    async function fetchUserFromGithub(username: string) {
      const response = await api.get(`/users/${username}`)
      setUser({
        name: response.data.name,
        avatar_url: response.data.avatar_url,
        login: response.data.login,
        bio: response.data.bio,
        company: response.data.company,
        followers: response.data.followers,
      })
    }
    fetchUserFromGithub(username)

    async function fetchIssuesFromUserRepo(
      username: string,
      search: string,
      repo: string,
    ) {
      const response = await api.get(
        `/search/issues?q=${search}%20repo:${username}/${repo}`,
      )
      const items = response.data.items
      setIssues([])

      items.map((item: IssueProps) => {
        return setIssues((state) => [
          ...state,
          {
            title: item.title,
            body: item.body,
            created_at: item.created_at,
            number: item.number,
          },
        ])
      })
    }
    fetchIssuesFromUserRepo(username, search, repo)
  }, [search])

  return (
    <HomeContainer>
      <ProfileCard>
        <img src={user?.avatar_url} alt="" id="avatar" />

        <h1 id="name">{user?.name}</h1>

        <Link
          title="github"
          href={`https://github.com/${username}`}
          target="_blank"
        />
        <p id="description">{user?.bio}</p>

        <div className="infos">

          <div className="username">
            <img src={githubIcon} alt="" />
            <span>{user?.login}</span>
          </div>
          
          {user?.company && (
            <div className="company">
              <img src={buildingIcon} alt="" />
              <span>{user?.company}</span>
            </div>
          )}

          <div className="followers">
            <img src={userGroupIcon} alt="" />
            <span>{`${user?.followers} seguidores`}</span>
          </div>

        </div>

      </ProfileCard>

      <PostsSection>
        <div className="header">
          <h1>Publicações</h1>
          <span>{`${issues.length} ${postsAmount}`}</span>
        </div>

        <Input onChange={(e) => setSearch(e.target.value)} />

        <div className="posts">
          {issues.map((issue, index) => (
            <Card
              key={index}
              body={issue.body}
              title={issue.title}
              createdAt={issue.created_at}
              number={issue.number}
            />
          ))}
        </div>

      </PostsSection>
    </HomeContainer>
  )
}
