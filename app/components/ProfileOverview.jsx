"use client"

import Image from "next/image"
import Profilepic from "../../public/shubhu.jpeg"
import { PROFILE } from "../constants"

const ProfileOverview = () => {
  return (
    <div className="my-24">
        <div className="flex flex-col items-center justify-center gap-4"></div>
        <Image src={Profilepic}
            width={110}
            height={110}
            alt="profilepic"
            className="rounded-full border-2 border-slate-400" />
        <h1 className="text-2xl font-bold">{PROFILE.name}</h1>
        <p className="tracking-tighter">{PROFILE.city}</p>
        <a href="/shubhu.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="flex item-center gap-x-2 rounded-full bg-gray-300
        px-3 py-2 text-sm font-semibold tracking-tight text-slate-950
        hover:text-teal-800">
            Download Resume
            <FaDownload

        </a>
    </div>
  )
}

export default ProfileOverview