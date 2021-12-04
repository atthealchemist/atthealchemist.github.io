import React, { useState } from 'react'
import { useTranslations } from 'use-intl';
import { Badge, BooleanBadge } from '../components';
import { Technology } from '../components/technologies';
import skillStorage from "../storage/skills.json";

const skills = skillStorage.python;

const PythonBadges = () => <>
    <Badge icon="/assets/images/languages/python.svg" caption="Python 3" value="3.6+" />
    <Badge icon="/assets/images/briefcase.svg" caption="Общий стаж" value="4 года" />
    <BooleanBadge icon="/assets/images/languages/python.svg" caption="Python 2" value="нет" />
    <BooleanBadge icon="/assets/images/poetry.svg" bgColor="bg-gray-900" caption="Poetry" value="да" />
    <Badge icon="/assets/images/level.svg" caption="Уровень" value="Middle+" />
    <Badge icon="/assets/images/methodology.svg" caption="Работаю по" value="TDD" />
</>;

const Python = () => {
    const tr = useTranslations("Technology");

    return <Technology
        tr={tr}
        title="Python"
        icon="/assets/images/languages/python.svg"
        badges={<PythonBadges />}
        skills={skills}
    />;
}

export default Python

export function getStaticProps({ locale }) {
    return {
        props: {
            messages: require(`../locales/${locale}.json`),
        },
    };
}