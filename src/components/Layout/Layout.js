import { Outlet } from 'react-router-dom';
import { 
    useState
} from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout() {
    // Set the notOnUserAuthPage to true,
    // when rendering login\register page.
    const [notOnUserAuthPage, setNotOnUserAuthPage] = useState(false);
    return(
        <>
            <Nav />
                <Outlet />
            {notOnUserAuthPage &&
                <Footer />
            }
        </>
    );
}