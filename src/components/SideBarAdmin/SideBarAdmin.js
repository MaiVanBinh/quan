import React, { useState } from "react";
import "./SideBarAdmin.css";
import Logo from "../../assets/banner.png";
import { useHistory } from "react-router";
import { connect } from "react-redux";

const SideBarAdmin = (props) => {
  const { page, setPage } = props;
  const history = useHistory();

  const changePage = (pageRoute) => {
    history.push(pageRoute);
    if (pageRoute === "/danh-sach-du-an") setPage(0);
    else setPage(1);
  };

  return (
    <div className="main-menu-container">
      <div className="logo-admin">
        <a href="/" target="_blank" style={{ textDecoration: "none" }}>
          <h3>LK - NNQ</h3>
        </a>
      </div>
      <div
        className={page === 0 ? "menu-item active" : "menu-item"}
        onClick={() => changePage("/danh-sach-du-an")}
      >
        <span className="icon">
          <svg
            height="20px"
            viewBox="0 -24 415.329 415"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={"#555"}
              d="M368.328 130.164h-26.39V88.52c-.036-27.301-22.157-49.426-49.461-49.457H223.09a32.974 32.974 0 01-21.664-8.106l-22.11-19.246A47.014 47.014 0 00148.457.164h-99C22.157.195.031 22.32 0 49.621v260.754c.035 30.258 23.715 55.215 53.93 56.84v.078h280.203c22.375-.043 41.637-15.82 46.078-37.754l34.168-143 .059-.27a46.995 46.995 0 00-9.797-38.945 47.005 47.005 0 00-36.313-17.16zM14.004 310.375V49.621c.023-19.574 15.883-35.433 35.457-35.457h99c7.965 0 15.66 2.879 21.668 8.11l22.11 19.242a46.994 46.994 0 0030.85 11.547h69.388c19.574.023 35.437 15.886 35.46 35.46v41.641h-6.652c-3.394-18.14-19.219-31.3-37.676-31.328h-2.312c-3.402-18.516-19.531-31.973-38.36-32h-161c-25.945.031-46.972 21.055-47 47v233.379a42.926 42.926 0 01-20.933-36.84zm269.605-197.54a24.365 24.365 0 0123.301 17.33H188.016c-21.746-.067-40.672 14.847-45.7 36.003L98.758 319.98l-.078.293A42.87 42.87 0 0188.938 339V145.836c.019-18.219 14.785-32.98 33-33zm-234.671 239.7v-238.7c.019-18.218 14.785-32.98 33-33h161a25.036 25.036 0 0124 18h-145c-25.946.028-46.97 21.056-47 47v203.52a43.013 43.013 0 01-26 3.18zm351.792-169.11l-34.164 142.99-.058.273c-3.082 15.445-16.63 26.574-32.375 26.605H94.39a56.806 56.806 0 0017.879-29.64l43.558-153.81.078-.292c3.489-14.903 16.801-25.43 32.11-25.387h180.312c9.852 0 19.184 4.399 25.453 11.996s8.817 17.598 6.95 27.27zm0 0"
            />
          </svg>
        </span>
        <span>Danh sách dự án</span>
      </div>
      <div
        className={page === 1 ? "menu-item active" : "menu-item"}
        onClick={() => changePage("/tao-moi")}
      >
        <span className="icon">
          <svg
            height="20px"
            viewBox="0 -24 415.329 415"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={"#555"}
              d="M368.328 130.164h-26.39V88.52c-.036-27.301-22.157-49.426-49.461-49.457H223.09a32.974 32.974 0 01-21.664-8.106l-22.11-19.246A47.014 47.014 0 00148.457.164h-99C22.157.195.031 22.32 0 49.621v260.754c.035 30.258 23.715 55.215 53.93 56.84v.078h280.203c22.375-.043 41.637-15.82 46.078-37.754l34.168-143 .059-.27a46.995 46.995 0 00-9.797-38.945 47.005 47.005 0 00-36.313-17.16zM14.004 310.375V49.621c.023-19.574 15.883-35.433 35.457-35.457h99c7.965 0 15.66 2.879 21.668 8.11l22.11 19.242a46.994 46.994 0 0030.85 11.547h69.388c19.574.023 35.437 15.886 35.46 35.46v41.641h-6.652c-3.394-18.14-19.219-31.3-37.676-31.328h-2.312c-3.402-18.516-19.531-31.973-38.36-32h-161c-25.945.031-46.972 21.055-47 47v233.379a42.926 42.926 0 01-20.933-36.84zm269.605-197.54a24.365 24.365 0 0123.301 17.33H188.016c-21.746-.067-40.672 14.847-45.7 36.003L98.758 319.98l-.078.293A42.87 42.87 0 0188.938 339V145.836c.019-18.219 14.785-32.98 33-33zm-234.671 239.7v-238.7c.019-18.218 14.785-32.98 33-33h161a25.036 25.036 0 0124 18h-145c-25.946.028-46.97 21.056-47 47v203.52a43.013 43.013 0 01-26 3.18zm351.792-169.11l-34.164 142.99-.058.273c-3.082 15.445-16.63 26.574-32.375 26.605H94.39a56.806 56.806 0 0017.879-29.64l43.558-153.81.078-.292c3.489-14.903 16.801-25.43 32.11-25.387h180.312c9.852 0 19.184 4.399 25.453 11.996s8.817 17.598 6.95 27.27zm0 0"
            />
          </svg>
        </span>
        <span>Tạo Mới</span>
      </div>
    </div>
  );
};

export default SideBarAdmin;