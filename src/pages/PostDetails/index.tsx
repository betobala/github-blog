import { Link } from '../../components/Link'
import { PostDetailsContainer, Info, Details } from './styles'
import arrowLeft from '../../assets/icons/arrow-left.svg'
import githubIcon from '../../assets/icons/github.svg'
import calendarIcon from '../../assets/icons/calendar.svg'
import commentIcon from '../../assets/icons/comment.svg'

export function PostDetails() {
  return (
    <PostDetailsContainer>
      <Info>
        <div className="links">
          <a id="return-link">
            <img src={arrowLeft} alt="" />
            <span>Voltar</span>
          </a>
          <Link title="ver no github" />
        </div>
        <h1 id="name">JavaScript data types and data structures</h1>
        <div className="infos">
          <div className="username">
            <img src={githubIcon} alt="" />
            <span>cameronwll</span>
          </div>
          <div className="date">
            <img src={calendarIcon} alt="" />
            <span>Há 1 dia</span>
          </div>
          <div className="comments">
            <img src={commentIcon} alt="" />
            <span>5 comentários</span>
          </div>
        </div>
      </Info>

      <Details>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </Details>
    </PostDetailsContainer>
  )
}
