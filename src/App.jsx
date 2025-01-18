import Header from "./components/Header/Header.jsx";
import Search from "./components/Search/Search.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Banner from "./components/Banner/Banner.jsx";
import banner from './assets/images/banner1.png';

export default function App() {
    return (
        <>
            <Header/>

            <main>
                <Search/>
                <Categories/>

                <a href="#">Главная</a>

                <div className="banners">
                    <Banner title={'Продукты'} body={'В розницу по оптовым ценам!'} link={'#'}
                            linkName={'Узнать подробнее'} img={banner}/>
                    <Banner title={'Скидка 20%'} body={'На креветки до 20.09'} link={'#'}
                            linkName={'Узнать подробнее'}/>
                </div>
            </main>
        </>
    )
}
