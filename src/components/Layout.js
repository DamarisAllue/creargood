import NavBar from "../components/NavBar";
import Banner from "./Banner";
import Footer from "./footer";


export const Layout = ({ children, fondo, banner }) => {
    return (
        <div className="layout">
            <NavBar />
            <Banner fondo={fondo} banner={banner} />
            {children}



            <Footer />
        </div>
    )
}