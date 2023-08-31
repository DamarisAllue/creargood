import NavBar from "../components/NavBar";
import Banner from "./Banner";

export const Layout = ({children, fondo}) => {
    return (
        <div className="layout">
            <NavBar />
            <Banner fondo={fondo}/>
            {children}

        </div>
    )
}