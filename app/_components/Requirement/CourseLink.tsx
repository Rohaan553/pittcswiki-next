import {CourseInfoData} from "@/app/_data/CourseInfoData"
import { cleanCourseId } from "@/app/_utils/course-namer"
import Link from "next/link"

const coursesWithWikiPages = CourseInfoData.courses.reduce(
  (acc: any, current: any) => {
    acc[current.id] = true
    if (current.replaces) {
      acc[current.replaces] = true
    }
    return acc
  },
  {}
)

const CourseLink = ({ id }: any) => {
  if (!id || typeof id !== "string") return null
  const cleanedId = cleanCourseId(id)
  if (coursesWithWikiPages[id]) {
    return <Link href={`/courses/${id}`}>{cleanedId}</Link>
  } else {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.google.com/search?q=${cleanedId} pitt`}
      >
        {cleanedId}
      </a>
    )
  }
}

export default CourseLink
