import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLock, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faBell, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

import styles from "./Header.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <a href="/" className={cx("logo-link")}>
            <img src={images.logo} alt="logo" className={cx("logo-img")} />
          </a>
          <span className={cx("phone-number")}>1800 6825</span>
        </div>

        <ul className={cx("navbar")}>
          <li className={cx("navbar-item")}>
            <a href="/chiendich" className={cx("navbar-link")}>
              CHIẾN DỊCH
            </a>
          </li>
          <li className={cx("navbar-item")}>
            <a href="/quangcao" className={cx("navbar-link")}>
              QUẢNG CÁO CHIA SẺ
            </a>
          </li>
          <li className={cx("navbar-item")}>
            <a href="/tochuc" className={cx("navbar-link")}>
              TỎ CHỨC
            </a>
          </li>
          <li className={cx("navbar-item")}>
            <a href="/chuxe" className={cx("navbar-link")}>
              CHỦ XE
            </a>
          </li>
          <li className={cx("navbar-item")}>
            <FontAwesomeIcon className={cx("navbar-icon")} icon={faBars} />

            <div className={cx("subheading")}>
              <a href="/" className={cx("intro")}>
                Giới thiệu
              </a>
              <ul className={cx("news-list")}>
                Tin tức
                <li className={cx("news-item")}>
                  <a href="/" className={cx("news-link")}>
                    Tin drivadz
                  </a>
                </li>
                <li className={cx("news-item")}>
                  <a href="/" className={cx("news-link")}>
                    Tin chủ xe
                  </a>
                </li>
                <li className={cx("news-item")}>
                  <a href="/" className={cx("news-link")}>
                    Tin tổ chức
                  </a>
                </li>
                <li className={cx("news-item")}>
                  <a href="/" className={cx("news-link")}>
                    Tin khác
                  </a>
                </li>
              </ul>
              <a href="/" className={cx("library")}>
                Thư viện
              </a>
              <br />
              <a href="/" className={cx("newspapers")}>
                Báo chí
              </a>
            </div>
          </li>
        </ul>

        <div className={cx("right-block")}>
          <ul className={cx("right-list")}>
            <li className={cx("right-item")}>
              <a href="/" className={cx("item-link")}>
                <FontAwesomeIcon
                  className={cx("item-icon")}
                  icon={faUserPlus}
                />
              </a>
            </li>
            <li className={cx("right-item")}>
              <a href="/" className={cx("item-link")}>
                <FontAwesomeIcon className={cx("item-icon")} icon={faLock} />
              </a>
            </li>
            <li className={cx("right-item")}>
              <a href="/" className={cx("item-link")}>
                <FontAwesomeIcon
                  className={cx("item-icon")}
                  icon={faCircleQuestion}
                />
              </a>
            </li>
            <li className={cx("right-item")}>
              <a href="/" className={cx("item-link")}>
                <FontAwesomeIcon className={cx("item-icon")} icon={faBell} />
                <span className={cx("bell-notice")}>10</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
