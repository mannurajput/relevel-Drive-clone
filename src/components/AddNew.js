import React, { useState } from "react";
import "../styles/AddNew.css";
import AddIcon from '@mui/icons-material/Add';
const AddNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [folderName, setFolderName] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleFiles = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleFolderCreate = () => {
    //  logic to create a new folder
  };

  return (
    <div className="add-new">
      <div
        className="add-new-btn"
        onClick={toggleMenu}
        style={{ backgroundColor: "blue" }}
      >
        <i className="fa fa-plus"></i> Add New<span><AddIcon/></span>
      </div>
      {isOpen && (
        <div className="add-new-menu">
          <div className="upload-files">
            <div className="upload-files-title">Upload Files</div>
            <div className="upload-files-content">
              <div className="upload-files-dropzone">
                <div className="upload-files-icon">
                  <i className="fa fa-cloud-upload"></i>
                </div>
                <div className="upload-files-text">
                  Drag and drop files here, or <span>browse</span> to upload
                </div>
              </div>
              <input type="file" onChange={handleFiles} multiple />
            </div>
          </div>
          <div className="create-folder">
            <div className="create-folder-title">Create Folder</div>
            <div className="create-folder-content">
              <input
                type="text"
                placeholder="Enter folder name"
                value={folderName}
                onChange={(event) => setFolderName(event.target.value)}
              />
              <button onClick={handleFolderCreate}>OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNew;
