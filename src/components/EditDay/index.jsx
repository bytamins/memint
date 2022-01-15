import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../providers/user";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import InputField from "../InputField";

const EditDay = ({ tokenId, day }) => {
  const { account } = useContext(UserContext);
  const [details, setDetails] = useState(day);

  async function saveChanges() {
    try {
      const db = getFirestore();

      await setDoc(doc(db, "days", tokenId), {
        ...details,
        tokenId,
        account,
      });
      toast.success("Your day was successfully saved!");
    } catch (err) {
      toast.error(err.message);
    }
  }

  console.log(details);

  return (
    <div className="card">
      <div className="card-body">
        <InputField
          placeholder="Day Title"
          value={details.title}
          onChange={(val) =>
            setDetails({
              ...details,
              title: val,
            })
          }
        />
        <textarea
          className="form-control"
          placeholder="Description of the day..."
          value={details.description}
          onChange={(ev) =>
            setDetails({
              ...details,
              description: ev.target.value,
            })
          }></textarea>
        <button className="btn btn-primary" onClick={saveChanges}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditDay;
