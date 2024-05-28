import "../styles/HouseItemPreview.scss";

// vitrine des maisons sur la page d'accueil

function HouseItemPreview({ cover, title, onClick }) {
  return (
    <div className="Card" onClick={onClick}>
      <img className="Card__item" src={cover} alt={`${title} cover`} />
      <span className="Card__item--title">{title}</span>
    </div>
  );
}

export default HouseItemPreview;
