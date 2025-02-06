import { Link, Outlet } from 'react-router-dom';
import { 
    useEffect,
    // useRef,
    // useState
} from 'react';
import { useNavHeightContext } from '../../context/NavContext';
import firstSection from '../FirstSection.js/FirstSection';
import Register from '../../pages/Register/Register';
import Login from '../../pages/login/Login';
export default function Layout() {
    // const { userAuthorized, setUserAuthorized } = useState(true);
    const { setNavHeight, navRef } = useNavHeightContext();
    useEffect(() => {
        setNavHeight(navRef.current.offsetHeight);
        // console.log(navRef.current.offsetHeight)
    }, [navRef]);
    const MainHOC = firstSection(Outlet);
    const SecondHOC = firstSection(Register);
    return(
        <>
            <nav
                ref={navRef}
                className="navbar w-100 d-flex justify-content-between fixed-top">
                <Link to="/">
                    <img src="/logo192.png" alt="getjob_logo"/>
                </Link>
                <div className="btn-group">
                    <button 
                        type="button"
                        className="dropdown-toggle border_green bg-transparent rounded px-3 py-2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        AZE
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="#">AZE</a></li>
                        <li><a className="dropdown-item" href="#">ENG</a></li>
                        <li><a className="dropdown-item" href="#">RUS</a></li>
                    </ul>
                </div>
            </nav>
            {/* <main style={{ paddingTop: navHeight + 'px' }}>
                <Outlet />
            </main> */}
            <SecondHOC>
                <Register />
            </SecondHOC>
            <MainHOC>
                <Outlet />
            </MainHOC>
            
        </>
    );
}