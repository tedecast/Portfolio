import "./index.scss";

const Home = () => {
  const emoji = "\u{2728}";
  return (
    <div className="home-page container">
      <div className="text-zone">
        <div>
          <p className="hi-text">Hi,</p>
          <br />
          <p>I'm &nbsp;</p>
          <p className="t-logo">T</p>
          <p>erri</p>
          <p className="emoji">{emoji}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
