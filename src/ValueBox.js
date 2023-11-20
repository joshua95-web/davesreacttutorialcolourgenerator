const ValueBox = ({ colourValue, hexValue, isDarkText }) => {
  return (
    <section
      className="valuebox"
      style={{
        backgroundColor: colourValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p>{colourValue ? colourValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

ValueBox.defaultProps = {
  colourValue: "Empty Colour Value",
};
export default ValueBox;
