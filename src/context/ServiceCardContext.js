import React, {
    createContext,
    useState,
    useContext,
    useRef
} from 'react';

// Create a context with a default value
const ServiceCardContext = createContext();

// Provider component to wrap around the parts of the app that need access to the context
const ServiceCardProvider = ({ children }) => {
    const longestHeaderRef = useRef(null);
    const [lognestHeaderHeight, setLognestHeaderHeight] = useState(0);
    return (
        <ServiceCardContext.Provider
            value={{
                longestHeaderRef,
                lognestHeaderHeight,
                setLognestHeaderHeight
            }}>
        {children}
        </ServiceCardContext.Provider>
    );
};

const useServiceCardContext = () => useContext(ServiceCardContext);
export { ServiceCardProvider, ServiceCardContext, useServiceCardContext };
