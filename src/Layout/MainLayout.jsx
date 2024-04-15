
import NavBer from './../Pages/Shared/NavBer';
import { Outlet } from 'react-router-dom';
import Footer from './../Pages/Shared/Footer';
const MainLayout = () => {

    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;