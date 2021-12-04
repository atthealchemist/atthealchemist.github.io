import React from 'react'
import { useTranslations } from 'use-intl';
import { Technology } from "../components/technologies";
import { Badge, BooleanBadge } from "../components";
import skillStorage from "../storage/skills.json";

const skills = skillStorage.frontend;

const FrontendBadges = () => <>
    <Badge icon="/assets/images/yarn.svg" caption="Package manager" value="yarn" />
    <Badge icon="/assets/images/briefcase.svg" caption="Общий стаж" value={"6 лет"} />
    <BooleanBadge icon="/assets/images/redux.svg" caption="Redux" value="нет" />
    <BooleanBadge icon="/assets/images/poetry.svg" bgColor="bg-gray-900" caption="CSS" value="да" />
</>;

const Frontend = () => {
    const tr = useTranslations("Technology");

    return <Technology tr={tr} title="Frontend" icon="/assets/images/languages/react.svg" skills={skills} badges={<FrontendBadges />} />;
}

export default Frontend

export function getStaticProps({ locale }) {
    return {
        props: {
            messages: require(`../locales/${locale}.json`),
        },
    };
}