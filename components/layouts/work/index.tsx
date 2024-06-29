import React from "react"
import LinkText from "../../ui/link"

type WorkDetail = {
  title: string
  description: string
  link: string
  isExternal?: boolean
}

type WorkCategory = {
  name: string
  details: WorkDetail[]
}

const WorkCategory: WorkCategory[] = [
  {
    name: "Projects.",
    details: [
      {
        title: "Multi Step Form",
        description:
          "A multi step form for a fictional company, built with React, TypeScript, and TailwindCSS.",
        link: "https://multi-step-form-omega-nine.vercel.app",
        isExternal: false,
      },
      {
        title: "Static Job Listings",
        description:
          "A static job listing page, built with React, TypeScript, and TailwindCSS.",
        link: "https://github.com/pradeepkaswan/static-job-listings",
        isExternal: true,
      },
      {
        title: "Groove",
        description:
          "A music player built with React, TypeScript, and TailwindCSS.",
        link: "https://groove-mocha.vercel.app/",
        isExternal: true,
      },
      {
        title: "Spotify Profile",
        description:
          "A spotify profile page built with React, JavaScript, and TailwindCSS.",
        link: "https://spotify-profile-t6d7.vercel.app/",
        isExternal: true,
      },
    ],
  },
]

const WorkItem: React.FC<WorkDetail> = ({
  title,
  description,
  link,
  isExternal,
}) => {
  return (
    <>
      <div className=" flex flex-col gap-2 ">
        <LinkText
          href={link}
          isExternal={isExternal}
          className=" text-xl font-semibold text-neutral-200"
        >
          {title}
        </LinkText>
        <p className="text-xl font-semibold text-neutral-500">{description}</p>
      </div>
    </>
  )
}

const Work: React.FC = () => {
  return (
    <>
      {WorkCategory.map((item, index) => {
        return (
          <div key={index}>
            <h1 className="mb-6 text-xl font-semibold text-neutral-200">
              {item.name}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-10">
              {item.details.map((detail, index) => {
                return (
                  <WorkItem
                    key={index}
                    title={detail.title}
                    description={detail.description}
                    link={detail.link}
                    isExternal={detail.isExternal}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Work
