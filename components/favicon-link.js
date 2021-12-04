
const FaviconLink = (props) => {

    const { children, icon, ...rest } = props;

    return (
        <div className="flex flex-row items-center">
            {icon && <img className="w-5 mr-2" src={icon} />}
            <a {...rest}>{children}</a>
        </div>
    );
};

// const RepoLink = (props) => {

//     const { children, ...rest } = props;

//     const parseRepoUrl = (url) => {
//         const url = new URL(url);
//         return { project: url.pathname }
//     };

//     repo_name

//     return <FaviconLink {...rest}>{parseRepoUrl(children)}</FaviconLink>;
// };

export { FaviconLink }