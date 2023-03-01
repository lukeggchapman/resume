import React from 'react'
import Section from 'components/Section'
import skillContent from 'content/skills'

import Skill from './Skill'

function Skills() {
  return (
    <Section title="Skills">
      {(Object.keys(skillContent) as (keyof typeof skillContent)[]).map(
        (skillLevel) => (
          <Skill
            key={skillLevel}
            title={skillLevel}
            skills={skillContent[skillLevel]}
          />
        )
      )}
    </Section>
  )
}

export default Skills
