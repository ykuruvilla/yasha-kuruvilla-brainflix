import "./Button.scss";

const Button = (props) => {
  return (
    <button type="button" cursor="pointer" className="button" id={props.id}>
      {props.text}
    </button>
  );
};

export default Button;
