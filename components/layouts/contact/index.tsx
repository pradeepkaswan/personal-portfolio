import LinkText from "@/components/ui/link"

interface ContactProps {
	contactType: string
	contactLink: string
}
interface ContactCategory {
	name: string
	details: ContactProps[]
}

const ContactCategory: ContactCategory[] = [
	{
		name: "Twitter",
		details: [
			{
				contactType: "@kaswanpradeep_",
				contactLink: "https://twitter.com/kaswanpradeep_",
			},
		],
	},
	{
		name: "LinkedIn",
		details: [
			{
				contactType: "Pradeep Kaswan",
				contactLink: "https://www.linkedin.com/in/pradeepkaswan",
			},
		],
	},
	{
		name: "GitHub",
		details: [
			{
				contactType: "pradeepkaswan",
				contactLink: "https://github.com/pradeepkaswan",
			},
		],
	},
]

const Contact: React.FC = () => {
	return (
		<div>
			<h1 className=" text-xl font-semibold text-neutral-500 mb-6">
				You can reach me at:{" "}
				<LinkText
					href="https://twitter.com/kaswanpradeep_"
					target="_blank"
					className="text-neutral-200"
					isExternal={false}
				>
					@kaswanpradeep_
				</LinkText>{" "}
				or{" "}
				<LinkText
					href="mailto:pradeepkaswan7@gmail.com"
					target="_blank"
					className="text-neutral-200"
					isExternal={false}
				>
					pradeepkaswan7@gmail.com
				</LinkText>
			</h1>
			<p className="text-neutral-500 mb-6 font-semibold text-xl">
				I'm currently open to new opportunities, if you have any questions or
				just want to say hi, feel free to contact me using the links below.
			</p>
			<h1 className="text-xl font-semibold text-neutral-500 mb-6">
				Or you can find me on socials :
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
				{ContactCategory.map((item, index) => {
					return (
						<div key={index}>
							{item.details.map((detail, index) => {
								return (
									<LinkText
										key={index}
										href={detail.contactLink}
										target="_blank"
										isExternal={true}
										className="text-xl font-semibold text-neutral-200"
									>
										{item.name}
									</LinkText>
								)
							})}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Contact
