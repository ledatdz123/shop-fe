import Header from '../DefaultLayout/Header';
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container content">{children}</div>
        </div>
    );
}

export default HeaderOnly;
