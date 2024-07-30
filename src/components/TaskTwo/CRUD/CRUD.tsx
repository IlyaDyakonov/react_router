import "./CRUD.css";
import { UserProvider } from "../context/context";
import PostList from "../PostList/PostList";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import CreatePost from "../CreatePost/CreatePost";
import EditPost from "../EditPost/EditPost";
import ViewPost from "../ViewPost/ViewPost";


/**
 * Компонент для отображения навигационного меню.
 * Использует текущее местоположение для определения активной ссылки.
 */
function Menu() {
    const location = useLocation();
    const isActive = 'crud-menu__item crud-menu__item-active';
    const isNoActive = 'crud-menu__item';

    /**
     * Проверяет, является ли путь активным.
     * @param {string} path Путь для проверки.
     * @returns {boolean} Возвращает true, если путь активен.
     */
    const isExactActive = (path: string) => location.pathname === path;

    const API_HW_PROJECT_NAME = import.meta.env.REACT_APP_HW_PROJECT_NAME || '';

    // Рендеринг навигационного меню
    return (
        <nav className="crud-menu">
            <NavLink to={`${API_HW_PROJECT_NAME}/tasktwo/posts/`} className={isExactActive(`${API_HW_PROJECT_NAME}/tasktwo/posts/`) ? isActive : isNoActive}>Посты</NavLink>
            <NavLink to={`${API_HW_PROJECT_NAME}/tasktwo/posts/new`} className={(navData) => navData.isActive ? isActive : isNoActive}>Создать пост</NavLink>
        </nav>
    )
}

/**
 * главный компомент с навигацией по сайту
 */
function CRUD() {
    return (
        <UserProvider>
            <div className="container navigation-menu">
                <Menu />
                <div className="page-crud">
                    <Routes>
                        <Route path="/posts" element={<PostList />} />
                        <Route path="/posts/new" element={<CreatePost />} />
                        <Route path="/posts/:id" element={<ViewPost />} />
                        <Route path="/posts/:id/edit" element={<EditPost />} />
                    </Routes>
                </div>
            </div>
        </UserProvider>
    );
}

export default CRUD;