import React, { useState } from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';


export const FileUploader = (props) => {
    const [file, setFile] = useState(null);
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleUpload = () => {
      if (file) {
        const storage = getStorage();
        const storageRef = ref(storage, `images/${props.id}`);
        uploadBytes(storageRef, file);
      }
    };
  
    return (
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    );
  };