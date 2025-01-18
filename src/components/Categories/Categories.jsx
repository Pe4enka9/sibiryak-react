import './categories.css';
import Category from "../Category/Category.jsx";
import category1 from '../../assets/images/categories_1.png';
import category2 from '../../assets/images/categories_2.png';
import category3 from '../../assets/images/categories_3.png';
import category4 from '../../assets/images/categories_4.png';
import category5 from '../../assets/images/categories_5.png';
import category6 from '../../assets/images/categories_6.png';
import category7 from '../../assets/images/categories_7.png';
import category8 from '../../assets/images/categories_8.png';

export default function Categories() {
    return (
        <section className="categories">
            <div className="categories__container">
                <Category img={category1} title={'Мясо'}/>
                <Category img={category2} title={'Морепродукты'}/>
                <Category img={category3} title={'Все для курения'}/>
                <Category img={category4} title={'Напитки'}/>
                <Category img={category5} title={'Бакалея'}/>
                <Category img={category6} title={'Снеки'}/>
                <Category img={category7} title={'Орехи'}/>
                <Category img={category8} title={'Специи'}/>
            </div>
        </section>
    )
}
