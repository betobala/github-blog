import { Link } from '../../components/Link'
import { PostDetailsContainer, Info, Details } from './styles'
import arrowLeft from '../../assets/icons/arrow-left.svg'
import githubIcon from '../../assets/icons/github.svg'
import calendarIcon from '../../assets/icons/calendar.svg'
import commentIcon from '../../assets/icons/comment.svg'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IssueDetailsProps {
  body: string
  comments: number
  user: string
  created_at: Date
  title: string
  url: string
}

export function PostDetails() {
  const [issueDetails, setIssueDetails] = useState<IssueDetailsProps>({
    body: "",
    comments: 0,
    created_at: new Date,
    title: "",
    user: "",
    url: "",
  })
  const { issueId } = useParams()
  const navigate = useNavigate()
  const id = issueId ? issueId : "0"
  const username = 'betobala'
  const repo = 'github-blog'

  function handleBack() {
    navigate(-1)
  }
  
  useEffect(() => {
    async function fetchIssueDetails(
      repo: string,
      id: string,
      username: string,
    ) {
      const response = await api.get(
        `/repos/${username}/${repo}/issues/${id}`,
      )
      console.log(response.data)
      setIssueDetails({ 
        body: response.data.body,
        comments: response.data.comments,
        user: response.data.user.login,
        title: response.data.title,
        created_at: response.data.created_at,
        url: response.data.html_url,
      })
    }
    fetchIssueDetails(repo, id, username)
  }, [id])
  return (
    <PostDetailsContainer>

      <Info>

        <div className="links">
          <button id="return-link" onClick={() => handleBack()}>
            <img src={arrowLeft} alt="" />
            <span>Voltar</span>
          </button>
          <Link title="ver no github" href={issueDetails.url} target='_blank'/>
        </div>

        <h1 id="name">{issueDetails.title}</h1>

        <div className="infos">

          <div className="username">
            <img src={githubIcon} alt="" />
            <span>{issueDetails.user}</span>
          </div>

          <div className="date">
            <img src={calendarIcon} alt="" />
            <span>{formatDistanceToNowStrict(new Date(issueDetails.created_at), {
          addSuffix: true,
          locale: ptBR,
        })}</span>
          </div>

          <div className="comments">
            <img src={commentIcon} alt="" />
            <span>{`${issueDetails.comments} comentários`}</span>
          </div>

        </div>
      </Info>

      <Details>

        <ReactMarkdown
          children={issueDetails.body}
          remarkPlugins={[remarkGfm]}
        ></ReactMarkdown>

      </Details>
      
    </PostDetailsContainer>
  )
}
