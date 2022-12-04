import React from 'react'
import Skillset from '../assets/data/skills.json'
import patternrings from '../assets/pattern-rings.svg'

function Skills() {
  const [id, name, experience] = Skillset
  return (
    <div className='section__skills'>
      <div className='hr'></div>
      <div className='skillsets'>
        {Skillset.map((skill) => {
          // const [id, name, experience] = skill
          return (
            <div className='skill'>
              <h2>{skill.name}</h2>
              <p>{skill.experience} Years Experience</p>
            </div>
          )
          // console.log(skill)
        })}
      </div>
      <img className='rings2__img' src={patternrings} alt='' />
    </div>
  )
}

export default Skills
