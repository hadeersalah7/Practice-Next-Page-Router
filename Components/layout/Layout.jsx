import { Fragment } from "react/jsx-runtime";
import MainHeader from "./MainHeader";

const Layout = ({ children }) => {
    return (
        <Fragment>
            <MainHeader />
            <main>{children}</main>
        </Fragment>
    );
};

export default Layout;
