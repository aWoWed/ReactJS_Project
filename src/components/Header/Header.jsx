import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <img className={classes.header__img} src='https://img5.goodfon.ru/original/1280x1024/2/cc/space-planet-orbit-orbital-star-stars-stars-and-planet-dark.jpg'/>
        </header>
    );
}

export default Header;