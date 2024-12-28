import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-title">Строительство домов</h1>
                <nav className="header-nav">
                    <ul className="header-menu">
                        <li><Link to="/" className="header-link">Главная</Link></li>
                        <li><Link to="/about" className="header-link">О нас</Link></li>
                        <li><Link to="/contact" className="header-link">Контакты</Link></li>
                        <li><Link to="/test" className="header-link">Калькулятор стоимости</Link></li>
                        <li><Link to="/service" className="header-link">Услуги</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
