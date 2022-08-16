import classNames from "classnames/bind";

import React, { useState } from "react";
import styles from "./BlockHome.module.scss";
import BoxCampaign from "../BoxCampaign/BoxCampaign";

const cx = classNames.bind(styles);

function BlockHome({ type, blockValue }) {
  var [state, setState] = useState("register");
  console.log(state);

  const onClickHandle = (e) => {
    // let activeClass = document.getElementsByClassName("active");
    // activeClass.forEach((item) => {
    // item.classList.remove("active");
    // });

    setState(e.target.id);
  };
  return (
    <>
      <div className={cx("block-home")}>
        <div className={cx("block-campaign")}>
          <div className={cx("campaign")}>
            <ul className={cx("campaign-list")}>
              <li className={cx("campaign-item", "campaign-active")}>
                <button
                  className={
                    cx("campaign-link") + (state == "register" ? " active" : "")
                  }
                  id="register"
                  onClick={onClickHandle}
                >
                  Chiến dịch chờ đăng ký
                </button>
              </li>
              <li className={cx("campaign-item")}>
                <button
                  id="ads"
                  className={
                    cx("campaign-link") + (state == "ads" ? " active" : "")
                  }
                  onClick={onClickHandle}
                >
                  Chiến dịch đang quảng cáo
                </button>
              </li>
              <li className={cx("campaign-item")}>
                <button
                  id="end"
                  className={
                    cx("campaign-link") + (state == "end" ? " active" : "")
                  }
                  onClick={onClickHandle}
                >
                  Chiến dịch đã kết thúc
                </button>
              </li>
            </ul>
          </div>

          <div className={cx("campaign-location")}>
            <select name="" className={cx("location")}>
              <option value="">Thành phố</option>
              <option value="">Thành phố Hà Nội</option>
              <option value="">Tỉnh Hà Giang</option>
              <option value="">Tỉnh Cao Bằng</option>
              <option value="">Tỉnh Bắc Kạn</option>
              <option value="">Tỉnh Tuyên Quang</option>
              <option value="">Tỉnh Lào Cai</option>
              <option value="">Tỉnh Điện Biên</option>
              <option value="">Tỉnh Lai Châu</option>
            </select>
          </div>
        </div>
        <BoxCampaign />
      </div>
    </>
  );
}

export default BlockHome;
