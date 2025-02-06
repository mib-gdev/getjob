import { Link } from 'react-router-dom';
import { 
    useEffect
} from 'react';
import { useNavHeightContext } from '../../context/NavContext';

export default function Nav() {
    const { setNavHeight, navRef } = useNavHeightContext();
    useEffect(() => {
        setNavHeight(navRef.current.offsetHeight + 13);
    }, []);
    return(
        <nav
            ref={navRef}
            className="container-xxl py-2">
            <div className='d-flex justify-content-between'>
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
            </div>
        </nav>
    );
}