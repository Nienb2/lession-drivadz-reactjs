import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import ListCampaign from "~/components/Layout/components/Campaign/ListCampaign";
import Slider from "~/components/Layout/components/Slider/Slider";
import BlockHome from "~/components/Layout/components/BlockHome/BlockHome";
import ManagementSystem from "~/components/Layout/components/ManagementSystem/ManagementSystem";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <Slider />
      <ListCampaign />
      <BlockHome type="asdfdsafs" blockValue="123"></BlockHome>
      <ManagementSystem />
    </div>
  );
}

export default Home;
