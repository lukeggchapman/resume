import React from 'react'

import { SkillsData } from '../../resumeQuery'
import Skill from './Skill'

export interface SkillsProps {
  data: SkillsData
}

const Skills = ({ data }: SkillsProps) => (
  <>
    {data.edges.map(edge => {
      const skillset = edge.node
      return (Object.keys(skillset) as (keyof typeof skillset)[]).map(
        skillLevel => (
          <Skill
            key={skillLevel}
            title={skillLevel}
            skills={skillset[skillLevel]}
          />
        )
      )
    })}
  </>
)

export default Skills
