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
				title: "Invoicetor",
				description: "A simple invoicing web app for small scale businesses",
				link: "https://invoicetor.vercel.app",
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
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-10">
				{WorkCategory.map((item, index) => {
					return (
						<div key={index}>
							<h1 className="mb-6 text-xl font-semibold text-neutral-200">
								{item.name}
							</h1>
							<div>
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
			</div>
		</>
	)
}

export default Work
