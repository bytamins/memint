import { useState } from "react";
import { toast } from "react-toastify";
import InputField from "../InputField";
import ImageUpload from "../ImageUpload";

const EditDay = ({ day }) => {
  const [saving, setSaving] = useState(false);
  const [details, setDetails] = useState(
    day.id
      ? {
          id: day.id,
          tokenId: day.get("tokenId"),
          title: day.get("title"),
          description: day.get("description"),
          dayLabel: day.get("dayLabel"),
          timestamp: day.get("timestamp"),
        }
      : {}
  );

  async function saveChanges() {
    try {
      setSaving(true);
      day.set("image_url", details.image_url);
      day.set("title", details.title);
      day.set("description", details.description);
      await day.save();
      toast.success("Your day was successfully saved!");
      setSaving(false);
    } catch (err) {
      setSaving(false);
      toast.error(err.message);
    }
  }

  async function addImage(image_url) {
    try {
      setSaving(true);
      day.set("image_url", image_url);
      await day.save();
      toast.success("Your image was successfully uploaded!");
      setSaving(false);
    } catch (err) {
      setSaving(false);
      toast.error(err.message);
    }
  }

  return (
    <div className="row">
      <div className="col-md-4">
        <ImageUpload onSuccess={addImage} />
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
          {/* <div className="form-text">This is the Title of your NFT.</div> */}
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control form-control-lg"
            placeholder="Description of the day..."
            value={details.description}
            onChange={(ev) =>
              setDetails({
                ...details,
                description: ev.target.value,
              })
            }></textarea>
          {/* <div className="form-text">This is the Title of your NFT.</div> */}
        </div>
        <hr />
        <button
          className={`btn btn-primary btn-lg w-100 ${saving && "disabled"}`}
          onClick={saveChanges}>
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default EditDay;
