import "../styles/Bar.scss";

function Bar({ isAbout }) {
  return (
    <div className={`bar ${isAbout ? "bar--about" : ""}`}>
      {!isAbout && (
        <p className="bar--text">
          Chez vous, <span className="text-no-wrap">partout et ailleurs</span>
        </p>
      )}
    </div>
  );
}

export default Bar;
