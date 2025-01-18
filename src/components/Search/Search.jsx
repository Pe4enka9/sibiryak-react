import './search.css';
import logo from '../../assets/icons/logo.svg';

export default function Search() {
    return (
        <section className="search">
            <div className="search-container">
                <img src={logo} alt="ТД Сибиряк"/>

                <div className="search-container__input-container">
                    <input type="text" name="search" id="search" placeholder="Найти товар"/>
                </div>

                <div className="search-container__cart">
                    <a href="#" className="cart__icon"></a>

                    <div className="cart__info">
                        <div>Корзина</div>
                        <div>52 325 руб.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}