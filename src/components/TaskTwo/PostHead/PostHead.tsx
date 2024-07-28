import './PostHead.css';
import React from 'react';
import { useUser } from '../context/context';
import { Link } from 'react-router-dom';


/**
 * интерфейс для PostHead
 */
interface PostHeadProps {
    id?: number;
    created?: Date;
}

/**
 * Компонент создающий шапку поста с аватаркой, именем пользователя и датой публикации
 * @param {PostHeadProps} props свойства компонента для создания поста
 * @returns {React.ReactElement} элементы для поста
 */
const PostHead: React.FC<PostHeadProps> = ({ id, created }: PostHeadProps): React.ReactElement => {
    const user = useUser();
    return (
        <div className="post-head">
            <div className="user-info">
                {user && <img src={user.avatarUrl} alt={user.name} className='user-avatar' />}
                {user && <div>
                    <h4 className="user-name">{user.name}</h4>
                    {created && <span className='post-date'>Опубликованно: {new Date(created).toLocaleString()}</span>}
                </div>}
            </div>
            {id && (
                <div className="post-options">
                    <Link to={`/posts/${id}`}>Просмотр</Link>
                </div>
            )}
        </div >
    )
}

export default PostHead;