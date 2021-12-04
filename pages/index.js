import Head from 'next/head'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { LinkCard } from '../components/link-card';

const Home = () => {
  const tr = useTranslations("Home");

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-9xl my-2">{tr("hello")}</h1>
        <h1 className="text-8xl my-2">{tr("subtitle")}</h1>
        <h1 className="text-6xl my-2">{tr("description")}</h1>
      </div>
      <main className="flex flex-col items-center mt-6 w-full px-20 text-center">
        <div className="flex flex-wrap justify-around max-w-4xl sm:w-full">
          <LinkCard
            to="/python"
            title="Python разработчик"
            description="FastAPI, Django and so on..."
            image="/assets/images/languages/python.svg" />
          <LinkCard
            to="/frontend"
            title="Frontend разработчик"
            description="React.js, Next.js and so on..."
            image="/assets/images/languages/react.svg" />
        </div>
      </main>
    </div>
  )
}

export default Home

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}