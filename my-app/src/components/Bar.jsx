import "../styles/Bar.scss";

function Bar({ isAbout }) {
  return (
    //if true, add the class bar--about else add nothing = diff between the two pages (change state when isabout = true)
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
