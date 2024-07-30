import React, { useEffect, useState } from 'react';
import './CreatePost.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/context';


const CreatePost: React.FC = () => {
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const user = useUser();

    useEffect(() => {
        const AddContent = localStorage.getItem('AddContent');
        if (AddContent) {
            setContent(AddContent);
        }
    }, []);

    /**
   * Обработчик для отмены создания поста.
   */
    const handleClose = () => {
        localStorage.setItem('AddContent', content);
        navigate(`/tasktwo/posts`);
    }

    /**
   * Обработчик отправки формы для создания поста.
   * @param {React.FormEvent} event Событие формы
   */
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_NOTES_URL}/tasktwo/posts/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: 0, content })
            });
            if (response.ok) {
                localStorage.removeItem('AddContent');
                console.log('Вы написали пост!');
                navigate(`/tasktwo/posts`); 
            } else {
                console.error('Не удалось создать пост');
            }
        } catch (error) {
            console.error("Ошибка создания поста: ", error);
        }
    }

    return (
        <div className="create-post">
            <div className="create-post-head">
                <div className="post-links">
                    <span className="post-link">Публикация</span>
                    <span className="post-link">Фото/Видео</span>
                    <span className="post-link">Прямой эфир</span>
                    <span className="post-link">Ещё</span>
                </div>
                <button onClick={handleClose} className="close-post">×</button>
            </div>

            <form onSubmit={handleSubmit} className="create-post-form">
                <div className="user-add-textarea">
                    {user && <img src={user.avatarUrl} alt={user.name} className='user-avatar' />}
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder='Напишите Ваш текст для поста...'
                        required
                    />
                </div>
                <div className="post-form-controls">
                    <button type="submit" className="publish-button">Опубликовать</button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;
