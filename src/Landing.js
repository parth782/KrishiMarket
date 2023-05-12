import React from "react";
import styles from "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import ShoppersSearch from "./ShoppersSearch";

class Landing extends React.Component {
  render() {
    return (
      <div className="bg-primary w-full overflow-hidden">
        <div
          className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
        >
          <section
            id="landingPage"
            className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
          >
            <div
              id="description"
              className={`flex-1 flex justify-start items-center flex-row m-3`}
            >
              <h5 className="font-poppins font-semibold xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                Welcome to the farmer's bazaar! A place where local farmers can
                create their own inventory, update it, and sell farm-fresh
                products to everyone who is interested in fresh local produce.
                Shoppers can search for the products they are interested in and
                find the farms that sell those products.
              </h5>
            </div>
            <ShoppersSearch />
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Landing;
