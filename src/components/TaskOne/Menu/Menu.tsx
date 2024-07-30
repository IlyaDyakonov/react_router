/* eslint-disable no-irregular-whitespace */
import { Route, Routes, NavLink } from 'react-router-dom';
import './Menu.css';
import { DriftPage, ForzaPage, HomePage, TimeAttackPage } from '../';


/**
 * Главный компонент приложения
 * @returns {JSX.Element} - Основной элемент приложения
 */
function Menu(): JSX.Element {
    const isActiv = "menu__item menu__item-active";
    const isNotActiv = "menu__item";
    const active = ({ isActive }: { isActive: boolean }) => isActive ? isActiv : isNotActiv

    return (
        <nav className="menu">
            <NavLink to={"/taskone/main"} className={active}>Главная</NavLink>
            <NavLink to={"/taskone/drift"} className={active}>Дрифт-такси</NavLink>
            <NavLink to={"/taskone/timeattack"} className={active}>Forza Karting</NavLink>
            <NavLink to={"/taskone/forza"} className={active}>​Time Attack</NavLink>
        </nav>
    );
}

export function NavigationMenu() {
    return (
        <div className="container navigation-menu">
            <Menu />
            <div className="page">
                <Routes>
                    <Route path="main" element={<HomePage />} />
                    <Route path="drift" element={<DriftPage />} />
                    <Route path="timeattack" element={<TimeAttackPage />} />
                    <Route path="forza" element={<ForzaPage />} />
                </Routes>
            </div>
        </div>
    );
}