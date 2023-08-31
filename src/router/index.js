import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Faq from "../components/Faq";
import ProductList from "../components/ProductList";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>
    },
    {
        path : '/Faq',
        element : <Faq/>
    },
    {
        path : '/Productos',
        element : <ProductList/>
    }
]);