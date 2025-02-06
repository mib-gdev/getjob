import React, {
    createContext,
    useState,
    useRef,
    useContext
} from 'react';

// Create a context with a default value
const NavHeightContext = createContext();

// Provider component to wrap around the parts of the app that need access to the context
const NavHeightProvider = ({ children }) => {
    const [ navHeight, setNavHeight ] = useState(0);
    const navRef = useRef(null);
    return (
        <NavHeightContext.Provider
            value={{
                navHeight,
                setNavHeight,
                navRef
            }}>
        {children}
        </NavHeightContext.Provider>
    );
};

const useNavHeightContext = () => useContext(NavHeightContext);
export { NavHeightProvider, NavHeightContext, useNavHeightContext };
