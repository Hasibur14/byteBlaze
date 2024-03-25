import { useLoaderData } from "react-router-dom";
import placeholderImage from '../assets/404.jpg';

const Content = () => {
    const blog = useLoaderData();
    const { cover_image, title, description, published_at, tags } = blog;
    return (
        <div>
            <div className="card shadow-xl w-full mx-auto group  focus:no-underline p-4 mt-20" >
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || placeholderImage} />
                <div>
                   {
                    tags.map(tag => (
                        <a key={tag}  rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-gray-100 ml-2 text-gray-900">#{tag}</a>
                    ) )
                   }
                </div>
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}.</p>
                </div>
            </div>
        </div>
    );
};

export default Content;