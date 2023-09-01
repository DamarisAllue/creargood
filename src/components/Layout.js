import NavBar from "../components/NavBar";
import Banner from "./Banner";
import Footer from "./footer";

export const Layout = ({children, fondo, banner, titulo}) => {
    return (
        <div className="layout">
            <NavBar />
            <Banner fondo={fondo} banner={banner} titulo={titulo}/>
            {children}
            <Footer />
        </div>
    )
}