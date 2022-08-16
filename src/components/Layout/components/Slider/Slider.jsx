import classNames from "classnames/bind";

import React from "react";
import styles from "./Slider.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Slider() {
  return (
    <>
      <div className={cx("slider")}>
        <div className={cx("container")}>
          <div className={cx("group-img")}>
            <img
              src={images.banner}
              alt="slide"
              className={cx("slide-item")}
              idx="0"
            />
            <img
              src={images.banner}
              alt="slide"
              className={cx("slide-item")}
              idx="1"
              style={{ display: "none" }}
            />
            <img
              src={images.banner}
              alt="slide"
              className={cx("slide-item")}
              idx="2"
              style={{ display: "none" }}
            />
            <img
              src={images.banner}
              alt="slide"
              className={cx("slide-item")}
              idx="3"
              style={{ display: "none" }}
            />
          </div>

          <div className={cx("dots")}>
            <span className={cx("dot-item", "active")} idx="0"></span>
            <span className={cx("dot-item")} idx="1"></span>
            <span className={cx("dot-item")} idx="2"></span>
            <span className={cx("dot-item")} idx="3"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
