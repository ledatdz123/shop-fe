import Footer from './Footer';
import Header from './Header';
import Slidebar from './Slidebar';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Slidebar />
            <div className="container bg_color">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
