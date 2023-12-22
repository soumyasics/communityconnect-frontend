import "./textRightComp.css";
const TextRightComponent = ({ imgPath, content, heading, buttonContent }) => {
  return (
    <div className="text-right-comp">
      <img src={imgPath} alt="path" />
      <div className="text-right-section">
        <h3> {heading}</h3>
        <p> {content}</p>
        <button>{buttonContent}</button>
      </div>
    </div>
  );
};
export default TextRightComponent;
