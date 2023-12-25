import "./textRightComp.css";
const TextRightComponent = ({ imgPath, content, heading, buttonContent }) => {
  return (
    <div className="text-right-comp">
      <div className="text-right-img-container">
      <img src={imgPath} alt="path" />

      </div>
      <div className="text-right-section">
        <h3> {heading}</h3>
        <p> {content}</p>
        <button>{buttonContent}</button>
      </div>
    </div>
  );
};
export default TextRightComponent;
