import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarDays,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import React from "react";

import styles from "./BoxCampaign.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function BoxCampaign() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("wrap__card")}>
          <div className={cx("wrap__card-content")}>
            <div className={cx("wrap__card-container")}>
              <div className={cx("wrap__card-info")}>
                <div className={cx("card__info-img")}>
                  <img src={images.car} alt="car" />
                </div>
                <div className={cx("card__info-tag")}>
                  <FontAwesomeIcon
                    className={cx("card__info-tag-icon")}
                    icon={faCar}
                  />
                  <span className={cx("card__info-tag-number")}>0/5</span>
                </div>
                <div className={cx("card__info-body")}>
                  <div className={cx("card__info-body-title")}>
                    <p>FWD HÀ NỘI</p>
                  </div>
                  <div className={cx("card__info-body-content")}>
                    <div className={cx("info__body-content-price")}>
                      <b>2.000</b>
                      <span className={cx("info__body-content-month")}>
                        đ/tháng
                      </span>
                    </div>
                    <i className={cx("info__body-content-promotion")}>
                      Tặng kèm
                    </i>
                    <div className={cx("info__body-content-time")}>
                      <div className={cx("body__content-time-icon")}>
                        <FontAwesomeIcon icon={faCalendarDays} />
                      </div>
                      <div className={cx("body__content-time-text")}>
                        <div className={cx("content__time-bold")}>
                          <b>Thời gian quảng cáo:</b>
                        </div>
                        <span className={cx("content__time-normal")}>
                          02/12/2022 - 16/12/2022
                        </span>
                      </div>
                    </div>
                    <div className={cx("info__body-content-time")}>
                      <div className={cx("body__content-time-icon")}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </div>
                      <div className={cx("body__content-time-text")}>
                        <div className={cx("content__time-bold")}>
                          <b>Thời gian đăng kí còn lại:</b>
                        </div>
                        <span className={cx("content__time-end")}>
                          Hết thời gian đăng ký
                        </span>
                      </div>
                    </div>
                    <div className={cx("info__body-content-time")}>
                      <div className={cx("body__content-time-icon")}>
                        <FontAwesomeIcon icon={faLocationDot} />
                      </div>
                      <div className={cx("body__content-time-text")}>
                        <div className={cx("content__time-bold")}>
                          <b>Thành phố Hồ Chí Minh</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxCampaign;
