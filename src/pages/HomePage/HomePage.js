import "./homepage.css";

function HomePage(props) {
  return (
    <div className="homepage-container">
      <div className="homepage-text">
        <h1>I'm a Dog</h1>
        <h2>Pleas Love Us</h2>

        <br />
        <br />
        <p>
          Animals have come to mean so much in our lives. We live in a
          fragmented and disconnected culture. Politics are ugly, religion is
          struggling, technology is stressful, and the economy is unfortunate.
          What’s one thing that we have in our lives that we can depend on? A
          dog or a cat loving us unconditionally, every day, very faithfully
        </p>
      </div>

      <div className="homepage-imgs">
        <div className="position-images">
          <div className="img-box">
            <img src={"/images/corgi.jfif"} alt="" />
          </div>
          <div className="img-box">
            <img src={"/images/husky.jfif"} alt="" />
          </div>
        </div>

        <div className="position-images">
          <div className="img-box">
            <img src={"/images/Golden Retriver.png"} alt="" />
          </div>
          <div className="img-box">
            <img src={"/images/multise.jfif"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
