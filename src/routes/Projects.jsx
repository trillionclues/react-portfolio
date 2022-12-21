import React from 'react'
import { Route, Routes } from 'react-router'
import projectdata from '../assets/data/projects.json'
import Footer from '../Components/Footer'
import Nav from '../Components/Navbar'

// filter and return skill languagees
function Projects() {
  const getSkills = (obj) => {
    let skill = []
    for (let el in obj.skills) {
      skill.push(obj.skills[el])
    }
    return skill.join(' ').toString()
  }

  return (
    <>
      <div className='section__projects'>
        <div className='projects__nav'>
          <h1>Projects</h1>
          <button>CONTACT ME</button>
        </div>
        <div className='projects'>
          {projectdata.map((project) => {
            return (
              <div className='project' key={project.id}>
                <img src={project.thumbnail.small} alt='' />
                <h4>{project.title}</h4>
                <span>{getSkills(project)}</span>
                <div className='project__lang'></div>
                <div className='overview'>
                  <p>Github</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects
