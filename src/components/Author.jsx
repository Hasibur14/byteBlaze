import { useLoaderData } from "react-router-dom";


const Author = () => {
    const blog = useLoaderData();
    return (
        <div>
            <h2 className="text-5xl">{blog.title}</h2>
        </div>
    );
};

export default Author;