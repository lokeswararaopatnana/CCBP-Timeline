import {AiFillCalendar} from 'react-icons/ai'
import {VisitLink} from './styledComponents'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props

  const {imageUrl, projectTitle, description, projectUrl, duration} =
    projectDetails

  return (
    <div className="project-card-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-title-and-duration-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <VisitLink href={projectUrl}>Visit</VisitLink>
    </div>
  )
}
export default ProjectTimelineCard
