import { useState } from "react";
import { useTranslations } from "use-intl";

import Head from "next/head";
import Link from "next/link";

const Greeter = () => {
    const [age, setAge] = useState(25);
    const tr = useTranslations("Header");
    return <div className="flex flex-col">
        <h1 className="text-3xl font-bold">
            {tr('title')}
        </h1>
        <p className="mt-3 text-xl">
            {tr('description', { age: age })}
        </p>
    </div>
}

const NavLink = ({ to, children }) => <li className="p-2 bg-black hover:bg-opacity-80 text-gray-50 border border-transparent rounded-md text-2xl uppercase font-extrabold">
    <Link href={to}><a>{children}</a></Link>
</li>


const Contacts = () => <div className="flex flex-col gap-4">
    <h4 className="text-2xl text-right">
        <a href="tel:89998334688">+7 (999) 833-46-88</a>
    </h4>
    <ul className="flex flex-row gap-4 justify-end">
        <li>
            <a href="mailto:at.thealchemist@gmail.com">
                <img className="w-8 hover:opacity-80" src="/assets/images/social/gmail.svg" />
            </a>
        </li>
        <li>
            <a href="https://vk.com/at.thealchemist">
                <img className="w-8 hover:opacity-80" src="/assets/images/social/vk.svg" />
            </a>
        </li>
        <li>
            <a href="https://instagram.com/atthealchemist">
                <img className="w-8 hover:opacity-80" src="/assets/images/social/instagram.svg" />
            </a>
        </li>
        <li>
            <a href="https://telegram.org/atthealchemist">
                <img className="w-8 hover:opacity-80" src="/assets/images/social/telegram.svg" />
            </a>
        </li>
        <li>
            <a href="https://linkedin.com/in/atthealchemist">
                <img className="w-8 hover:opacity-80" src="/assets/images/social/linkedin.svg" />
            </a>
        </li>
    </ul>
</div>;

const Navigation = () => <nav>
    <ul className="flex lg:flex-row sm:flex-col justify-between items-center md:gap-40">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/python">Python</NavLink>
        <NavLink to="/frontend">Frontend</NavLink>
        <NavLink to="/about">About</NavLink>
    </ul>
</nav>;

const Header = () => {
    const tr = useTranslations("Header");

    return (
        <>
            <Head>
                <title>{tr("title")}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="flex flex-row justify-between items-center m-6">
                <Greeter />
                <Navigation />
                <Contacts />
            </header>
            <hr />
        </>
    );
};


export { Header };

