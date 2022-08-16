import React from "react";
import styles from "./styles/ListCampaign.module.scss";
import classNames from "classnames/bind";

function ListCampaign(props) {
  const cx = classNames.bind(styles);
  return (
    <>
      <div className={cx("slogan")}>
        <div className={cx("slogan-title")}>
          <b className={cx("title-bold")}>driVadz</b>
          <span className={cx("title-normal")}>
            {" "}
            - Tiên Phong Quảng Cáo Trên Ô Tô - Xe Máy
          </span>
        </div>
      </div>
    </>
  );
}

export default ListCampaign;
