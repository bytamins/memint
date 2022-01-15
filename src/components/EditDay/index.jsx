import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../providers/user";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import InputField from "../InputField";
import ImageUpload from "../ImageUpload";
import moment from "moment";
import { DAY_LABEL_FORMAT } from "../../utils/constants";

const EditDay = ({ tokenId, day, timestamp }) => {
  const { account } = useContext(UserContext);
  const [details, setDetails] = useState(day);

  async function saveChanges() {
    try {
      const db = getFirestore();

      await setDoc(doc(db, "days", tokenId), {
        ...details,
        tokenId,
        account,
        timestamp,
        dayLabel: moment(timestamp * 1000).format(DAY_LABEL_FORMAT),
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
        <div className="mb-3">
          <label className="form-label">NFT Name</label>
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
          <div className="form-text">This is the Title of your NFT.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
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
          <div className="form-text">This is the Title of your NFT.</div>
        </div>
        <hr />
        <button className="btn btn-primary btn-lg w-100" onClick={saveChanges}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditDay;
