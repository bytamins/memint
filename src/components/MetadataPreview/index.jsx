import { useState } from "react";
import ReactJson from "react-json-view";
import { ToggleArea } from "./styled";

const MetadataPreview = ({ day }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="row">
      <ToggleArea className="col-md-12">
        <button onClick={() => setVisible(!visible)} className="btn btn-link">
          {visible ? "Hide" : "Show"} Metadata JSON
        </button>
      </ToggleArea>
      {visible && (
        <div className="col-md-12">
          <div className="card mb-4 mt-1">
            <div className="card-body">
              <ReactJson
                src={{
                  name: day.get("title"),
                  description: day.get("description"),
                  file_url: day.get("image_url"),
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetadataPreview;
