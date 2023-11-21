import { requirementsToDotsJsx } from "./helper-methods"

const RequirementDots = ({ requirements, legend }: any) => {
  if (!requirements) return null
  // This only looks at prereqs, not coreqs for now. Maybe coreqs can be fed in the same way, and be triangles
  // instead of circles or some shit
  // Examples of requirements
  // "prereq": {
  // 	"and": ["CS0441", "CS0445"]
  // }
  // "prereq": {
  // 	"or": ["CS0007", "CS0401"]
  // }
  // "prereq": ["CS0445"]
  return (
    <>
      <span className="reqs-dots prereqs">
        {requirementsToDotsJsx(requirements.prereq, legend)}
      </span>
      <span className="reqs-dots coreqs">
        {requirementsToDotsJsx(requirements.coreq, legend)}
      </span>
    </>
  )
}

export default RequirementDots
