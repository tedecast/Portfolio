import "./index.scss";

const Home = () => {
  const emoji = "\u{2728}";
  return (
    <div className="home-page container">
      <div className="text-zone">
        <div>
          <h5 className="hi-text">Hi,</h5>
          <br />
          <h5>I'm &nbsp;</h5>
          <h5 className="t-logo">T</h5>
          <h5>erri{emoji}</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
