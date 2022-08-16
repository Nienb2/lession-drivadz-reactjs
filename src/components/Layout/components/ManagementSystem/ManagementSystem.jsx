import classNames from "classnames/bind";

import React from "react";
import styles from "./ManagementSystem.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function ManagementSystem() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("management__system")}>
          <h1 className={cx("title__slide")}>
            <strong>Hệ thống quản lý xe drivadz</strong>
          </h1>
          <ul className={cx("system__list")}>
            <li className={cx("system__item", "active")}>
              Đo lường trực tuyến 24/24
            </li>
            <li className={cx("system__item")}>Hỗ trợ đa nền tảng</li>
            <li className={cx("system__item")}>Hệ thống GPS độc lập</li>
            <li className={cx("system__item")}>Theo dõi số lần hiển thị</li>
            <li className={cx("system__item")}>Cung cấp đầy đủ dữ liệu</li>
          </ul>
          <div className={cx("background__slide")}>
            <div className={cx("content__slide")}>
              <ul className={cx("content__slide-text")}>
                <li className={cx("content__slide-text-bold")}>
                  <h3>Đo lường trực tuyến 24/24</h3>
                </li>
                <li className={cx("content__slide-text-normal")}>
                  Quý khách hàng sẽ nhận được báo cáo chi tiết và tức thì theo
                  thời gian thực của từng phương tiện tham gia chiến dịch
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagementSystem;
