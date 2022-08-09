import logo from "./logo-white.png";
import "./App.css";
import { Footer } from "./Footer";

function App() {
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
          Australia, Jordan, India, and more.
        </p>
        <p className="about">
          We provide <strong>web design and development</strong>,{" "}
          <strong>internet marketing</strong>, <strong>social media</strong>,{" "}
          <strong>SEO</strong>, <strong>email marketing</strong>,{" "}
          <strong>content writing</strong>, <strong>web hosting</strong>, and{" "}
          <strong>app development services</strong> to businesses large and
          small that are looking to broadcast their messages more efficiently.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
