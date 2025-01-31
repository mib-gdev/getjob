import './style.css'

export default function Login() {
    return(
        <div className='login_bg'>
            <div className='container-xxl flex_center flex-column h-100'>
                <nav className="navbar w-100 d-flex justify-content-between">
                    <a className="navbar-brand" href="#">
                        <img src="/logo192.png" alt="getjob_logo"/>
                    </a>
                    <div className="btn-group">
                        <button 
                            type="button"
                            className="btn dropdown-toggle"
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
                <main className='bg_form w_fit mb-auto mt-5 mt-sm-auto mx-5 mx-md-auto'>
                    <h3 className='fs_xl text-center mb-4'>Platformamıza qoşulun</h3>
                    <button className='bg-transparent py-2 px-4 px_md_6 w-100 rounded border_black d-flex align-items-center'>
                        <img className='pe-4 icon_md' src="/google-color-icon.svg" alt="google icon"/>
                        <span className='fs_md'>Google ilə daxil olun</span>
                    </button>
                    <div className='lines text-center my_4-5'>
                        <span className='px-4 px-sm-5 fs_sm'>və ya</span>
                    </div>
                    <form className='d-flex flex-column gap-3'>
                        <label className='inp_style rounded px-4 ps_md_6 pe-4 py-2'>
                            <img className='pe-4 icon_sm' src="/envelope.jpg" alt="envelope icon" />
                            <input className='fs_sm' type='text' placeholder='E-poçt' />
                        </label>
                        <label className='inp_style rounded px-4 ps_md_6 pe-4 py-2'>
                            <img className='pe-4 icon_sm' src="/lock.png" alt="lock icon" />
                            <input className='fs_sm' type='text' placeholder='Şifrə' />
                            <img className='ms-auto icon_sm' src="/eye.png" alt="eye icon" />
                        </label>
                        <div className='d-flex flex-column flex-sm-row justify-content-sm-between gap-2 gap-sm-5'>
                            <label className='flex_center'>
                                <input className='me-2' type='checkbox' />
                                <span className='fs_sm'>Şifrəmi yadda saxla</span>
                            </label>
                            <a className='text_black fs_sm text-center text-sm-start' href="#" target='_blank'>Şifrəni unutmusunuz?</a>
                        </div>
                        <button className='py-2 rounded border-0 px-5 text-white bg_green w_fit mx-auto mt-1 mb-2 fs_lg' type='button'>Daxil ol</button>
                    </form>
                    <div className='text-center fs_sm fw-normal pb-4'>
                        <span>Hesabınız yoxdur?</span>
                        <a className='text_green ps-2' href="#">Qeydiyyatdan keçin</a>
                    </div>
                </main>
            </div>
        </div>
    );
}