import { Outlet } from 'react-router-dom';
import { 
    useState
} from 'react';
import CustomNav from './Nav';
import Footer from './Footer';

export default function Layout() {
    // Set the notOnUserAuthPage to false,
    // when rendering login\register page.
    const [notOnUserAuthPage, setNotOnUserAuthPage] = useState(true);
    return(
        <>
            <CustomNav />
                <Outlet />
            {notOnUserAuthPage &&
                <Footer />
            }
        </>
    );
}