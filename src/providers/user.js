import { createContext, useEffect, useState } from "react";

import { useMoralis } from "react-moralis";

const UserContext = createContext();
const UserConsumer = UserContext.Consumer;

const UserProvider = ({ children }) => {
  const { authenticate, isAuthenticated, user: MoralisUser } = useMoralis();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      setUser(MoralisUser);
    }
  }, [isAuthenticated]);

  return (
    <UserContext.Provider
      value={{
        authenticate,
        isAuthenticated,
        loading,
        user,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserConsumer, UserProvider };
