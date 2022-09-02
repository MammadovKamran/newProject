import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="main">
        <div className="main-top">
          <div className="main-top-text">
            DÜNYA MƏTBƏXİNDƏN
            <span> DADLI TƏAMLAR</span>
          </div>
        </div>

        <div className="box-container">
          <div className="box box-1">
            <div className="box-text">
              <h5>Fish Biryani</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </div>
          </div>

          <div className="box box-2">
            <div className="box-text">
              <h5>Mixed Cake</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </div>
          </div>

          <div className="box box-3">
            <div className="box-text">
              <h5>Roasted Chicken</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </div>
          </div>

          <div className="box box-4">
            <div className="box-text">
              <h5>Fish Biryani</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </div>
          </div>

          <div className="box box-5">
            <div className="box-text">
              <h5>Lorem Ipsum</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </div>
          </div>

          <div className="box box-6">
            <div className="box-text">
              <h5>Mixed Salad</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
