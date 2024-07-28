import './PostBody.css';
import React from 'react';
import PostHead from '../PostHead/PostHead';


export interface PostBodyProps {
    id?: number;
    created: Date;
    content: string;
}

/**
 * компонент отображения тела поста
 * + заголовок PostHead (имя и аватарка пользователя)
 * + сообщение поста
 * + кнопки коментирования и лайка
 * @param {PostBodyProps} props свойства необходимые для создания поста
 * @returns {React.ReactElement} элементы тела
 */
const PostBody: React.FC<PostBodyProps> = ({ id, content, created }: PostBodyProps): React.ReactElement => {

    return (
        <>
            <PostHead id={id} created={created} />
            <div className="post-body">
                <p>{content}</p>
            </div>
            <div className="post-action">
                <button className="like-button">Нравится</button>
                <button className="comment-button">Комментировать</button>
            </div>

        </>
    )
}

export default PostBody;