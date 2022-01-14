import { getFirestore, doc, setDoc } from "firebase/firestore";
import moment from "moment";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user";
const Onboard = () => {
  const { getUser, account } = useContext(UserContext);
  const [birthdate, setBirthdate] = useState("");
  async function createUser() {
    const db = getFirestore();
    await setDoc(doc(db, "users", account), {
      address: account,
      birthdate: moment(birthdate).unix(),
      birthdateLabel: birthdate,
    });
    await getUser();
  }
  return (
    <div className="container mt-5">
      <div className="col-md-4 offset-md-4 text-center mt-5">
        <h1>Welcome!</h1>
        <div className="mb-3">
          <label htmlfor="exampleInputEmail1" className="form-label">
            Birthdate
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(ev) => setBirthdate(ev.target.value)}
            value={birthdate}
            id="exampleInputEmail1"
            placeholder="12/13/91"
          />
          <div className="form-text">
            Once you enter your birthdate, you can't change it.
          </div>
        </div>
        <button onClick={createUser} type="button" className="btn btn-primary">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Onboard;
