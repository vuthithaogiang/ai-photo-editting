import Header from '../DefaultLayout/Header';

function HeaderOnly({ children }) {
        return (
                <>
                        <Header />
                        <main className="content"> {children}</main>
                </>
        );
}

export default HeaderOnly;
