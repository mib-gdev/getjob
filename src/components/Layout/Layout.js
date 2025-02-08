import { Outlet } from 'react-router-dom';
import { 
    useState
} from 'react';
import CustomNav from './Nav';
import Footer from './Footer';
import { useUserStateContext } from '../../context/UserStateContext';

export default function Layout() {
    const { userState } = useUserStateContext(); //  temporary code
    return(
        <>
            <CustomNav userState={userState} />
                <Outlet />
            {userState !== 'authorizing' && //  temporary code
                <Footer />
            }
        </>
    );
}