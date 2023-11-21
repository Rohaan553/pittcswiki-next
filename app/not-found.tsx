import Image from "next/image"
import RocPic from "@/app/_images/roc.png"

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center">
        Much like our quarterback, this page does not exist
      </h1>
      <Image
        src={RocPic}
        alt="Picture of Roc <3"
        className="w-[80vw] sm:w-[70vw] lg:w-[40vw]"
      />
    </div>
  )
}
