import { z } from "zod"

const projectSchema = z.object({
  repo: z.string(),
  link: z.string(),
  description: z.string(),
})

export type Project = z.infer<typeof projectSchema>

export async function getProjects(): Promise<Project[]> {
  return [
    {
      repo: "issue-tracker",
      link: "https://github.com/pradeepkaswan/issue-tracker",
      description:
        "The application provides a comprehensive solution for managing and tracking issues within a project, streamlining the workflow and enhancing collaboration.",
    },
    {
      repo: "spotify-profile",
      link: "https://github.com/pradeepkaswan/spotify-profile",
      description:
        "Spotify Profile is a web application that allows users to view their Spotify user profile data",
    },
    {
      repo: "threads-clone",
      link: "https://github.com/pradeepkaswan/threads-clone",
      description:
        "Threads Clone is made using Next.js 14 with all the latest features, for e.g. server actions.",
    },
  ]
}
