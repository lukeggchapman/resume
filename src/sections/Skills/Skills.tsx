import React from 'react'
import Section from 'components/Section'
import skillData from 'content/skills/skills.json'

import Skill from './Skill'

function Skills() {
  return (
    <Section title="Skills">
      {(Object.keys(skillData) as (keyof typeof skillData)[]).map(
        (skillLevel) => (
          <Skill
            key={skillLevel}
            title={skillLevel}
            skills={skillData[skillLevel]}
          />
        )
      )}
    </Section>
  )
}

export default Skills
