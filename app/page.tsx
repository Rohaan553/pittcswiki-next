import Image from "next/image"
import Link from "next/link"

import CampusBackground from "@/app/_images/pittcampus.jpg"
import Logo from "@/app/_images/logo.svg"
import { RightArrowSvg } from "@/app/_svgs/RightArrowSvg"
import LinkPanel from "./_components/LinkPanel/LinkPanel"

export default function Home() {
  return (
    <main className="">
      <div className="landing-image">
        <Image alt="" src={CampusBackground} className="w-auto md:w-full" />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="md:mt-24 flex">
          <div className="hidden md:block self-end h-64 bg-white p-6 shadow-2xl w-1/2 border">
            <h1>The Pitt CS Wiki</h1>
            <p>
              A collection of course testimonials, guides, career prep
              resources, and much more!
            </p>
            <Link
              href="/guides/"
              className="btn inline-flex bg-pittgold items-center font-semibold py-2 px-2 border rounded"
            >
              Get Started {RightArrowSvg}
            </Link>
          </div>
          <div className="w-1/2">
            <Image
              src={Logo}
              className="ml-auto max-w-sm -mb-12"
              alt="Pitt CS Wiki Logo"
            />
          </div>
        </div>
        <div className="md:hidden mt-12">
          <h1>The Pitt CS Wiki</h1>
          <p>
            A collection of course testimonials, guides, career prep resources,
            and much more!
          </p>
          <Link
            href="/guides/"
            className="btn inline-flex bg-pittgold items-center"
          >
            Get Started {RightArrowSvg}
          </Link>
        </div>
        <LinkPanel />
      </div>
    </main>
  )
}
