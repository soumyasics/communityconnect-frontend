import "./textCenterComponent.css";

const TextCenterComponent = ({
  heading,
  textContent,
  buttonContent = "About us",
}) => {
  return (
    <div>
      <div className="text-center-comp">
        <h1>{heading}</h1>
        <p>{textContent}</p>
        <button> {buttonContent}</button>
      </div>
    </div>
  );
};
export default TextCenterComponent;
