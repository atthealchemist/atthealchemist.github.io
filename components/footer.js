import { useTranslations } from "use-intl";

const Footer = () => {
    const tr = useTranslations("Footer");
    return (
        <footer className="text-2xl flex items-center justify-center w-full h-24 border-t">
            {tr("made_with", { heart: '❤️️' })}
            <a href="https://nextjs.org" target="_blank">
                <img src="/assets/images/languages/nextjs.svg" alt="Next.js Logo" className="h-12 ml-2" />
            </a>
        </footer>
    );
};

export { Footer };