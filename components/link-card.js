import Link from 'next/link';

const LinkCard = ({ to, title, description, image }) => <Link href={to}>
    <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
        <div className="flex flex-auto gap-6">
            {image && <div className="flex flex-col justify-center">
                <img src={image} alt="Python Logo" className="w-28" />
            </div>}
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-xl">
                    {description}
                </p>
            </div>
        </div>
    </a>
</Link>

export { LinkCard }