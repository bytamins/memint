import { useContext } from "react";
import { UserContext } from "../../providers/user";

const Profile = () => {
  const { authenticate } = useContext(UserContext);
  return (
    <div className="container">
      <h1>Profile</h1>
      <button
        onClick={() =>
          authenticate({
            signingMessage: "Log in using Moralis",
          })
        }>
        Log In
      </button>
    </div>
  );
};

export default Profile;
