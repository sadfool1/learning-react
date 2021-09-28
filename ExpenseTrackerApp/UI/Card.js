import "./Card.css";
// acts like a shell for all the other components
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
