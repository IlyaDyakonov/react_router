import { createContext, useContext } from "react";

/**
 * интерфейс для пользователя
 */
export interface User {
    name: string;
    avatarUrl: string;
}

/**
 * дефольный тестовый юзер
 * @type {string} name - имя и фамилия пользователя
 * @type {string} avatarUrl - ссылка на аватар
 */
export const defaultUser: User = {
    name: 'Johnny Silverhend',
    avatarUrl: 'https://www.zbrushcentral.com/uploads/default/original/4X/b/4/3/b43a3cbb272d4f2546ce9349dd872db213fd3cf8.jpeg',
};

/**
 * контекст для пользователя
 */
const UserContext = createContext<User | null>(null);

/**
 * хук для доступа к контексту пользователя
 * @returns {User} пользователь из контекста
 */
export const useUser = (): User => {
    const context = useContext(UserContext);
    if (!context) {
        throw Error ('ошибка пользователя');
    }
    return context;
};

/**
 * интерфейс для компонента провайдера пользователя
 */
interface UserProviderProps {
    children: React.ReactNode;
    user?: User;
}

/**
 * провайдер контекста пользователя
 * @param props свойство для пользователя
 * @returns {React.ReactElement} заданный контекст
 */
export const UserProvider = ({ children, user = defaultUser }: UserProviderProps): React.ReactElement => {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
} 