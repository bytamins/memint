import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../providers/user";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import InputField from "../InputField";
import ImageUpload from "../ImageUpload";

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
    <div className="row">
      <div className="col-md-4">
        <ImageUpload
          onSuccess={(image_url) =>
            setDetails({
              ...details,
              image_url,
            })
          }
        />
      </div>
      <div className="col-md-8">
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
      </div>
      <div className="col-md-12">
        <button className="btn btn-primary" onClick={saveChanges}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditDay;
