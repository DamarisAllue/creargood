import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Faq from "../components/Faq";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>
    },
    {
        path : '/Faq',
        element : <Faq/>
    },
]);