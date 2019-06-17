import React from 'react'
import skillData from 'content/skills/skills.json'

import Skill from './Skill'

const Skills = () => (
  <>
    {(Object.keys(skillData) as (keyof typeof skillData)[]).map(skillLevel => (
      <Skill
        key={skillLevel}
        title={skillLevel}
        skills={skillData[skillLevel]}
      />
    ))}
  </>
)

export default Skills
