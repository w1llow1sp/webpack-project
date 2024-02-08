import { Suspense } from 'react';
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/About/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";


const App = () => {
    return (
        <div className={'app'}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense  fallback={<div>...loading</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
                <Route path={'/'} element={<MainPageAsync/>}/>
            </Routes>
            </Suspense>
        </div>
    );
};

export default App;