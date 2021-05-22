import React, { useState, useHistory } from "react";
import PageRouters from "./../../router/PageRouter";
import { IconMenu2, logoutHandle, IconLogout } from "../../utilities/SVG";
import './Container.css'
import SideBarAdmin from "../SideBarAdmin/SideBarAdmin";

const Container = (props) => {
  const [page, setPage] = useState(0); // 0: danh-muc, 1: bai-viet
  const [sideBarActive, setSidebarActive] = useState(true);
  const logoutHandle = () => {
    console.log("Logout");
  };
  return (
    <>
      <div className={"admin-side-bar " + (sideBarActive ? "active" : "")}>
        <SideBarAdmin page={page} setPage={setPage} />
      </div>
      <div
        style={{
          marginLeft: sideBarActive ? "300px" : "0px",
          transition: "0.5s ease-in-out",
        }}
      >
        <div
          className="top-menu d-flex justify-content-between align-items-center"
          style={{
            left: sideBarActive ? "300px" : "0px",
            transition: "0.5s ease-in-out",
          }}
        >
          <div
            className="group-btn"
            onClick={() => setSidebarActive(!sideBarActive)}
          >
            <IconMenu2 width={15} height={15} color={"#333"} />
          </div>
          <div className="group-btn" onClick={logoutHandle}>
            <IconLogout width={15} height={15} color={"#333"} />
            <span className="ml-2">Đăng xuất</span>
          </div>
        </div>
        <div className="container-layout">
          <PageRouters />
        </div>
      </div>
    </>
  );
};

export default Container;
