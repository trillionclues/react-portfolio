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
              <div className='project__lang'>
                {/* {projectdata.map((skills) => {
                  return (
                    <p>
                      <span>{skills.skill[0]}</span>
                      <span>{skills.skill[1]}</span>
                    </p>
                  )
                })} */}
              </div>
              <div className='overview'>
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
