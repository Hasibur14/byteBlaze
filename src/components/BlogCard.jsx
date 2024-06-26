import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import placeholderImage from '../assets/404.jpg';

const BlogCard = ({ blog }) => {
    const { cover_image, title, description, published_at, } = blog;
    return (
        <div>
            <Link to={`/blog/${blog.id}`} className="max-w-sm card  mx-auto group transition border-2 hover:scale-105 border-secondary hover:border-primary border-opacity-30 hover:border-opacity-80 hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50 p-4">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || placeholderImage} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}.</p>
                </div>
            </Link>

        </div>
    );
};



BlogCard.propTypes = {
    blog: PropTypes.object.isRequired,
    deletable: PropTypes.bool,
    handleDelete: PropTypes.func,
}


export default BlogCard;