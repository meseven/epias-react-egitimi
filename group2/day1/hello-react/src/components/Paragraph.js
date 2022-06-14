import React from "react";
import PropTypes from "prop-types";

function Paragraph({ color, text, numberOfLines }) {
  return (
    <div style={{ color: color }}>
      <div>Text: {text}</div>
      <div>Number of Lines: {numberOfLines}</div>
    </div>
  );
}

Paragraph.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  numberOfLines: PropTypes.number.isRequired,
};

Paragraph.defaultProps = {
  text: "Varsayılan Paragraf",
};

export default Paragraph;
