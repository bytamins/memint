import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { create } from "ipfs-http-client";

import { Dropzone } from "./styled";

const client = create("https://ipfs.infura.io:5001/api/v0");

const ImageUpload = ({ onSuccess }) => {
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
        console.log(url);
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
    <Dropzone {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here ...</p>
      ) : (
        <p>Drag 'n' drop an image here, or click to select an image.</p>
      )}
    </Dropzone>
  );
};

export default ImageUpload;
