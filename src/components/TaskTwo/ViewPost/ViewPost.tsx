import './ViewPost.css';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostBody, { PostBodyProps } from '../PostBody/PostBody';


/**
 * Компонент для просмотра деталей поста.
 * Загружает информацию о посте с сервера и отображает её, а также предоставляет возможность удаления поста.
 */
const ViewPost: React.FC = () => {
    const [post, setPost] = useState<PostBodyProps | null>(null); // Состояние для хранения данных поста
    const { id } = useParams(); // ID поста из параметров маршрута
    const navigate = useNavigate(); // Хук для навигации
    const apiUrl = `${import.meta.env.VITE_NOTES_URL}/posts/`;

    // Загрузка деталей поста при монтировании компонента
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`${apiUrl}${id}`);
                const data = await response.json();
                setPost(data.post);
            } catch (error) {
                console.error('Ошибка при загрузке поста:', error);
            }
        };
        fetchPost();
    }, [id, navigate, apiUrl]);

    const handleDelete = async () => {
        try {
            const response = await fetch(`${apiUrl}${id}`, { method: 'DELETE' });
            if (response.ok) {
                navigate(`${import.meta.env.REACT_APP_HW_PROJECT_NAME}/`);
            } else {
                console.error('Ошибка при удалении поста');
            }
        } catch (error) {
            console.error('Ошибка при удалении поста:', error);
        }
    };

    if (!post) {
        return <div className="loading">Загрузка...</div>; // Состояние загрузки
    }

    // Рендеринг детальной информации поста
    return (
        <div className="view-container">
            <div className="view-post">
                <PostBody content={post.content} created={post.created} /> {/* Компонент тела поста */}
                <div className="view-actions">
                    <button onClick={() => navigate(`/posts/${id}/edit`)} className="edit-button">Изменить</button>
                    <button onClick={handleDelete} className="delete-button">Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default ViewPost;