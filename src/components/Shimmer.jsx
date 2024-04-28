import "./ShimmerStyle.css";

const Shimmer = ({ numberOfCards }) => {
  const cardsArray = new Array(numberOfCards).fill(null);

  return (
    <div className="Shimmer">
      {cardsArray.map((cardIndex) => (
        <div key={cardIndex} className="shimmer-card">
          <div className="img-container"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
