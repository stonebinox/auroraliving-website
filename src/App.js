import { useEffect, useState } from "react";

import logo from "./logo-white.png";
import "./App.css";
import { Footer } from "./Footer";

function App() {
  const [lights, setLights] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLights("true");
    }, 3000);
  }, []);

  return (
    <div className="App">
      <div className="circle xxlarge shade1"></div>
      <div className="circle xlarge shade2"></div>
      <div className="circle large shade3"></div>
      <div className="circle mediun shade4"></div>
      <div className="circle small shade5"></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Aurora Living LLP" />
        <p className="desktop">
          <a
            href="mailto:contact@auroraliving.in"
            className="App-link"
            rel="noopener noreferrer"
          >
            auroradesigns.adm@gmail.com
          </a>{" "}
          &bull;{" "}
          <a
            href="tel:+916360058954"
            className="App-link"
            rel="noopener noreferrer"
          >
            +91-6360058954
          </a>
        </p>
        <p className="mobile">
          <a
            href="mailto:contact@auroraliving.in"
            className="App-link"
            rel="noopener noreferrer"
          >
            auroradesigns.adm@gmail.com
          </a>
          <br />
          <a
            href="tel:+916360058954"
            className="App-link"
            rel="noopener noreferrer"
          >
            +91-6360058954
          </a>
        </p>
      </header>
      <div className="content-holder">
        <hr />
        <p className="about">
          Established in 2020, <strong>Aurora Designs</strong> is headquartered
          in Bangalore, India. As a remote company, we have worked with clients
          from all over the world including companies and clients from the USA,
          Australia, Estonia, Poland, UK, Africa, Jordan, India, and more.
        </p>
        <hr />
      </div>
      <div className="ev-container">
        <div className="title">What we're working on currently</div>
        <div className="subtitle">Electric Mobility Solutions</div>
        <div className="headlight-holder">
          <div className="headlight-outer" on={lights}>
            <div className="headlight-inner" />
            <div className="light" />
          </div>
          <div className="headlight-outer" on={lights}>
            <div className="headlight-inner" />
            <div className="light" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
