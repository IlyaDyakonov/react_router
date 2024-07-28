import './PostList.css';
import Post from '../Post/Post';
import React, { useEffect, useState } from 'react';
import { PostBodyProps } from '../PostBody/PostBody';


/**
 * главная функция отображающая ВСЕ главные посты
 */
const PostList: React.FC = () => {
    const [posts, setPosts] = useState<PostBodyProps[]>([]);

    useEffect(() => {
        const fetchPost = async() => {
            try {
                const response = await fetch(`${import.meta.env.VITE_NOTES_URL}/posts`);
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching: ", {error})
            }
        }
        fetchPost();
    }, []);

    return (
        <div className="posts">
            {posts.map(post => (
                <Post 
                    key={post.id}
                    id={post.id}
                    content={post.content}
                    created={post.created}
                />
            ))}
        </div>
    )
}

export default PostList;