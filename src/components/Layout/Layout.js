import { Link, Outlet } from 'react-router-dom';
export default function Layout() {
    return(
        <div className='login_bg'>
            <div className='container-xxl flex_center flex-column h-100'>
                <nav className="navbar w-100 d-flex justify-content-between">
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
                <Outlet />
            </div>
        </div>
        
    );
}