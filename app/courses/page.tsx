import Link from "next/link"
import CourseListing from "../_components/Courses/CourseListing"

import { CourseInfoData } from "@/app/_data/CourseInfoData"
import { courseCategorizer } from "@/app/_utils/course-categorizer"
const categorizedCourses = courseCategorizer(CourseInfoData.courses)

export default function CoursesPage() {
  return (
    <div className="container px-2 mx-auto">
      <h1>Courses</h1>
      <p>
        If you are new to the CS classes,{" "}
        <span className="ml-2 bg-yellow-300 px-2 py-1">
          we suggest viewing our{" "}
          <Link href="/academics/scheduling">scheduling guide</Link>!
        </span>
      </p>
      <CourseListing
        courseList={CourseInfoData}
        courseCategories={categorizedCourses}
      />
    </div>
  )
}
