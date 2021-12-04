import { Skill } from "./skills";

const Technology = ({ tr, skills, badges, icon, title }) => <div className="flex flex-col gap-4 mb-6">
    <div className="flex flex-col m-auto justify-center mt-6 mb-6">
        <img className="w-20 h-20 m-auto" src={icon} />
        <h1 className="text-6xl mt-4 mb-4">{title}</h1>
    </div>
    <ul class="flex flex-wrap flex-row gap-12 mb-3 justify-center">
        {badges}
    </ul>
    <hr />

    <h1 className="text-center text-5xl mt-4 mb-4">{tr("skills")}</h1>
    <div className="flex flex-wrap gap-12 ml-6 justify-center">
        {skills && skills.map(s => <Skill tr={tr} {...s} />)}
    </div>
</div>;

export { Technology }