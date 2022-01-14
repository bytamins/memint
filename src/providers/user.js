import { createContext, useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";

const UserContext = createContext();
const UserConsumer = UserContext.Consumer;

const UserProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [user, setUser] = useState(null);

  async function getUser() {
    const db = getFirestore();

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("address", "==", account));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUser(doc.data());
    });
  }

  useEffect(() => {
    console.log("ON APP MOUNT");
    if (account) {
      console.log("ON ADDRESS CHANGE");
      getUser();
    }
  }, [account]);
  return (
    <UserContext.Provider
      value={{
        account,
        setAccount,
        getUser,
        user,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserConsumer, UserProvider };
