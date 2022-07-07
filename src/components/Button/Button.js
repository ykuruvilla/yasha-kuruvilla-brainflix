import "./Button.scss";

const Button = ({ text, id }) => {
  return (
    <button type="button" className="button" id={id}>
      {text}
    </button>
  );
};

export default Button;
