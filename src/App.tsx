import React from 'react';
import styles from "./components/Site.module.css";
import {
    Link,
    NavLink,
    Outlet, useNavigate
} from 'react-router-dom';
import {S} from './components/pages/_styles'
import {PATH} from "./routes/router";

function App() {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <div className={styles.header}>
                <h1>HEADER</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PROTECTED_PAGE}>Protected page</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <div className={styles.HorizontalNavigation}>
                        <Link className={styles.LinkLikeButton}
                              to={PATH.ADIDAS}>На главную</Link>
                        <button className={styles.ButtonLikeLink}
                                onClick={navigateHandler}>Назад</button>
                    </div>
                    <Outlet/>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;
