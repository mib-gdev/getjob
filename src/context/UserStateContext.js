import React, {
    createContext,
    useState,
    useContext
} from 'react';

// Create a context with a default value
const UserStateContext = createContext();

// Provider component to wrap around the parts of the app that need access to the context
const UserStateProvider = ({ children }) => {
    const [userState, setUserState] = useState('unauthorized');
    return (
        <UserStateContext.Provider
            value={{
                userState,
                setUserState,
            }}>
        {children}
        </UserStateContext.Provider>
    );
};

const useUserStateContext = () => useContext(UserStateContext);
export { UserStateProvider, UserStateContext, useUserStateContext };
