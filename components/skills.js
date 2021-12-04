import { FaviconLink, Stars, } from "."

const Skill = ({ tr, title, stars, abilities, projects }) => {
    return <div className="w-72 p-6 mt-6 border rounded-lg">
        <div className="flex flex-col items-center">
            <h4 className="mt-3 mb-3 text-3xl">{title}</h4>
            <Stars stars={stars} />
        </div>

        {abilities &&
            <>
                <h5 className="mt-3 mb-3 text-xl">{tr("abilities")}</h5>
                <ul className="flex flex-col list-disc ml-6">
                    {abilities.map((a, idx) => <li className="text-l" key={idx}>{a.title}</li>)}
                </ul>
            </>
        }
        <h5 className="mt-3 mb-3 text-xl">{tr("used_in")}</h5>
        <ul className="flex flex-col">
            {
                projects.map(
                    (p, idx) =>
                        <li className="text-l" key={idx}>
                            <FaviconLink
                                className="hover:text-blue-600 focus:text-blue-600"
                                icon="/assets/images/repositories/github.svg"
                                href={p}>
                                {p}
                            </FaviconLink>
                        </li>
                )
            }
        </ul>
    </div>
}

export { Skill }