import React from 'react'
import projectdata from '../assets/data/projects.json'

function Projects() {
  return (
    <div className='section__projects'>
      <div className='projects__nav'>
        <h1>Projects</h1>
        <button>CONTACT ME</button>
      </div>
      <div className='projects'>
        {projectdata.map((project) => {
          return (
            <div className='project'>
              <img src={project.thumbnail.small} alt='' />
              <h4>{project.title}</h4>
              <p>{project.skills.flat()}</p>
              {/* <div className='project__lang'>
                {project.skills.map((skill) => {
                  return <p>{skill}</p>
                })}
              </div> */}
              <div className='overview'>
                {/* <p>View details</p> */}
                <p>Github</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
