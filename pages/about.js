import React from 'react'

const Section = ({ title, icon, children }) => <article className="flex flex-col w-96 h-full border rounded-md p-4">
    <div class="flex flex-auto items-center">
        <h4 className="text-xl my-3">{title}</h4>
        {icon && <span className="mx-3 text-3xl">{icon}</span>}
    </div>
    {children}
</article>

const About = () => <section className="m-6 flex flex-col gap-10">
    {/* <h2 className="text-4xl text-center"></h2> */}
    <div className="flex flex-col m-auto justify-center mt-6 mb-6">
        <img className="w-20 h-20 m-auto" src="/assets/images/info.svg" />
        <h1 className="text-6xl mt-4 mb-4">Обо мне (как о разработчике)</h1>
    </div>
    <div className="flex flex-auto flex-wrap gap-10 justify-center">
        <Section title="Почему я, а не ${anotherDeveloper}?" icon="🤔">
            <ul className="list-disc ml-6">
                <li>Лучший код - когда нет кода! Стараюсь писать как можно меньше кода в логике, компенсируя это объемными тестами!</li>
                <li>Линтеры включены по умолчанию, рефакторинг я люблю и уважаю.</li>
                <li>Мой код приятно поддерживать, т.к. я стараюсь писать документацию для каждого метода!</li>
                <li>Могу в одиночку за неделю сделать PoC системы любой сложности (правда потом моментально выгораю)</li>
                <li>Самообучаюсь в сжатые сроки (google/stackoverflow/официальная документация наше всё)</li>
                <li>Интересуюсь современными технологиями в IT, всегда иду в ногу со временем, использую только последние версии языков и инструментов для разработки программного обеспечения</li>
                <li>знаю и умею проектировать программное обеспечение (ER, UML, CASE)</li>
            </ul>
        </Section>
        <Section title="Я хочу работать в этих сферах" icon="😍">
            <ul className="list-disc ml-6">
                <li>Информационные системы, разработка клиентоориентированных систем</li>
                <li>Мобильные приложения (Android)</li>
                <li>UI/UX приложений (любых)</li>
                <li>Форензика (компьютерная криминалистика), OSINT (разведка на основе открытых источников) и так далее</li>
                <li>Администрирование веб-серверов</li>
                <li>DevOps / Site Reliability</li>
                <li>Robotic Process Automation (RPA)</li>
            </ul>
        </Section>
        <Section title="Я никогда не буду работать" icon="😡">
            <ul className="list-disc ml-6">
                <li>С PHP, в любых его проявлениях</li>
                <li>С чёрным бизнесом (букмекерские конторы, коллекторские агентства, HYIP и т.д.)</li>
                <li>В финтехе и криптотехе (блокчейн, биткоины и всё связанное с ними)</li>
            </ul>
        </Section>
    </div>
    <div class="flex flex-auto justify-center text-center my-6">
        <h1 className="text-6xl">А ещё, честно говоря, я не очень люблю эмоджи 😑</h1>
    </div>
</section>

export default About

export function getStaticProps({ locale }) {
    return {
        props: {
            messages: require(`../locales/${locale}.json`),
        },
    };
}