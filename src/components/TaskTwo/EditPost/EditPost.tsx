import './EditPost.css';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostHead from '../PostHead/PostHead';

/**
 * Компонент для редактирования поста.
 * Использует состояние для хранения и изменения содержимого поста.
 * Обрабатывает загрузку данных поста и отправку изменений на сервер.
 */
const EditPost: React.FC = () => {
    const [content, setContent] = useState(''); // Состояние для содержимого поста
    const { id } = useParams(); // Получение ID поста из параметров маршрута
    const navigate = useNavigate(); // Хук для навигации
    const apiUrl = `${import.meta.env.VITE_NOTES_URL}/tasktwo/posts/`;

    // Загрузка текущих данных поста для редактирования
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`${apiUrl}${id}`);
                const postData = await response.json();
                setContent(postData.post.content); // Установка содержимого поста в состояние
            } catch (error) {
                console.error('Не удалось загрузить пост:', error);
            }
        };

        fetchPost();
    }, [id, apiUrl]);

    /**
     * Обработчик сохранения изменений в посте.
     * Отправляет измененные данные на сервер и перенаправляет пользователя.
     * @param {React.FormEvent} event - Событие формы
     */
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch(`${apiUrl}${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, content }) // Отправка изменений на сервер
            });
            if (response.ok) {
                navigate(`/tasktwo/posts/`); // Перенаправление после успешного сохранения
            } else {
                console.error('Не удалось сохранить изменения поста');
            }
        } catch (error) {
            console.error('Ошибка при сохранении поста:', error);
        }
    };

    /**
     * Обработчик для кнопки закрытия (крестика).
     * Перенаправляет пользователя обратно к просмотру поста.
     */
    const handleClose = () => {
        navigate(`/tasktwo/posts/${id}`); // Перенаправление
    };

    // Рендеринг компонента
    return (
        <div className="edit-post-container">
            <div className="edit-post">
                <div className="edit-post-header">
                    <span>Редактировать публикацию</span>
                    <button onClick={handleClose} className="close-button">×</button>
                </div>
                <PostHead />
                <form onSubmit={handleSubmit} className="edit-post-form">
                    <textarea
                        className="edit-post-textarea"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder='Измените текст для поста...'
                        required>
                    </textarea>
                    <div className="edit-post-placeholder">
                        <span>📸Фото/видео</span>
                        <span>🧟Отметить друзей</span>
                        <span>😉Чувства/действия</span>
                        <span>🗺️Отметить посещение</span>
                        <span>🎞️GIF</span>
                    </div>
                    <div className="edit-actions">
                        <button type="submit" className="save-button">Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPost;