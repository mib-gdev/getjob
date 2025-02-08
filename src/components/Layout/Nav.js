import { Link } from 'react-router-dom';
import { 
    useEffect,
    useMemo,
    useState
} from 'react';
import { useNavHeightContext } from '../../context/NavContext';
import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
    Image,
    ButtonGroup,
    Stack
} from 'react-bootstrap';

const OnUserAuthPage = () => {
    return (
        <nav
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

const NotOnUserAuthPage = () => {
    const linkBtnClass = useMemo(() => "border_green p-2 fw-light fs_md rounded", []);
    const navLinkClass = useMemo(() => "text_black fw-medium fs_md py-2", []);
    return(
        <>
        {['lg',].map((expand) => (
            <Navbar
                key={expand}
                expand={expand}
                className=""
            >
                <Container fluid='xxl'>
                    <Navbar.Brand href="#">
                        <Image src="/logo192.png" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <Image src="/logo192.png" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav
                                className="justify-content-end justify-content-lg-center align-items-center flex-grow-1 gap-5 gap-lg-5">
                                <Link
                                    to="/"
                                    className={navLinkClass}
                                >
                                    Necə işləyir?</Link>
                                <Link
                                    to="/"
                                    className={navLinkClass}
                                >
                                    İşçi Tapın</Link>
                                <Link
                                    to="/"
                                    className={navLinkClass}
                                >
                                    İş axtarın</Link>
                                <NavDropdown
                                    title="AZE"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    className={navLinkClass}
                                >
                                    <NavDropdown.Item href="#action3">AZE</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">ENG</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">RUS</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Stack
                                direction='horizontal'
                                gap={2}
                            >
                                <Link
                                    to="/login"
                                    className={`${linkBtnClass} text-white bg_green`}
                                >
                                    Daxil ol</Link>
                                <Link
                                    to="/register"
                                    className={`${linkBtnClass} text_green bg-white`}
                                >
                                    Qeydiyyat</Link>
                            </Stack>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        ))}
    </>
    );
}
export default function CustomNav({ userState }) {
    // Set the notOnUserAuthPage to false,
    // when rendering login\register page.
    const { setNavHeight, navRef } = useNavHeightContext();
    useEffect(() => {
        setNavHeight(navRef.current.offsetHeight + 1);
    }, []);
    return (
        <div className='custom_nav' ref={navRef}>
            {/* temporary code starts */}
            {userState === 'authorizing' ? (
                <OnUserAuthPage />
            ) : userState === 'unauthorized' ? (
                <NotOnUserAuthPage />
            ) : (
                <NotOnUserAuthPage />
            )}
            {/* temporary code ends */}
        </div>
    )
}