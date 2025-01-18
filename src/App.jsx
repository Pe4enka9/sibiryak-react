import Header from "./components/Header/Header.jsx";
import Search from "./components/Search/Search.jsx";
import Categories from "./components/Categories/Categories.jsx";

export default function App() {
    return (
        <>
            <Header/>

            <main>
                <Search/>
                <Categories/>

                <a href="#">Главная</a>
            </main>
        </>
    )
}
