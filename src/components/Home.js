import React from "react";
import AddNew from "./AddNew";
import CardGrid from "./CardGrid";
import FoldersGrid from "./FoldersGrid";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginLeft: "5px",
        marginRight: "5px",
      }}
    >
      <div>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ margin: "15px" }}>
              <img
                src="/images/mydrive-logo.png"
                height="50px"
                style={{ width: "150px", marginLeft: "10px" }}
              />
            </div>

            <div>
              <input
                placeholder="Search...."
                style={{ width: "30vw", height: "35px" }}
              />
            </div>
          </div>

          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/9846/9846939.png"
              alt="setting"
              style={{ width: "20px" }}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/7553/7553127.png"
              alt="help"
              style={{ width: "20px", marginLeft: "20px", marginRight: "20px" }}
            />
          </div>
        </nav>
        {/* <AddNew />
        <h2 style={{ marginLeft: "20px" }}>Quick Access</h2>
        <CardGrid />

        <h2 style={{ marginLeft: "20px" }}>Folders</h2>
        <FoldersGrid /> */}
        <div className="home-container">
          <div className="addnew-container">
            <AddNew />
          </div>
          <div className="content-container">
            <div className="cardgrid-container">
              <CardGrid />
            </div>
            <div className="foldersgrid-container">
              <FoldersGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
