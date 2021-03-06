import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { create } from "ipfs-http-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { Dropzone } from "./styled";

const client = create("https://ipfs.infura.io:5001/api/v0");

const ImageUpload = ({ onSuccess }) => {
  // const [imageUrl, setImageUrl] = useState(null);
  const onDrop = useCallback(
    async (acceptedFiles) => {
      const file = acceptedFiles[0];
      let reader = new FileReader();
      reader.onload = async function (e) {
        let blob = new Blob([new Uint8Array(e.target.result)], {
          type: file.type,
        });
        const { cid } = await client.add(blob);
        const url = `https://ipfs.infura.io/ipfs/${cid}`;
        // setImageUrl(url);
        onSuccess(url);
      };
      reader.readAsArrayBuffer(file);
    },
    [onSuccess]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
    maxFiles: 1,
  });
  return (
    <div>
      {/* {imageUrl && <img src={imageUrl} className="w-100 mb-2" alt="..." />} */}
      <Dropzone {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here ...</p>
        ) : (
          <>
            <FontAwesomeIcon icon={faImage} color="#cccccc" size="3x" />
            <p>Drop an image here, or click to upload.</p>
          </>
        )}
      </Dropzone>
    </div>
  );
};

export default ImageUpload;
