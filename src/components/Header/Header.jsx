import './header.css';

export default function Header() {
    return (
        <header>
            <div className="header-container">
                <nav>
                    <a href="#">Каталог</a>
                    <a href="#">О нас</a>
                    <a href="#">Доставка и оплата</a>
                    <a href="#">Партнерам</a>
                    <a href="#">Контакты</a>
                    <a href="#">% Акции</a>
                </nav>

                <div>Заказы по телефону: <a href="tel:+79180000000">8(918)000-00-00</a></div>
            </div>
        </header>
    )
}
