import "./Post.css";
import PostBody, { PostBodyProps } from "../PostBody/PostBody";

/**
 * функция для одного поста
 * + содержит компонет PropsBody - тело поста
 * + поле для комментариев постов
 * @param {PostBodyProps} props свойства компонента для создания поста
 * @returns {React.ReactElement} элементы для поста
 */
const Post: React.FC<PostBodyProps> = ( props ) => {
    return(
        <div className="post">
            <PostBody {...props}/>
            <div className="add-comment">
                <input type="text" placeholder="Напишите комментарий..."/>
            </div>
        </div>
    )
}

export default Post;