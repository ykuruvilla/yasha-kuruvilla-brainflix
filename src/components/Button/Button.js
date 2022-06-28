import "./Button.scss";

const Button = (props) => {
  return (
    <button type="button" cursor="pointer" className="button">
      <img className="button__image" src={props.icon} alt={props.alt} />
      {props.text}
    </button>
  );
};

export default Button;
