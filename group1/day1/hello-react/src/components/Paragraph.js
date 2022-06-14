import React from "react";
import PropTypes from "prop-types";

function Paragraph({ title, text, number, onClick }) {
  return (
    <div>
      <h1>{title}</h1>
      {number}-{text}
      <button onClick={onClick}>Click</button>
    </div>
  );
}

Paragraph.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  number: PropTypes.number,
  onClick: PropTypes.func,
};

Paragraph.defaultProps = {
  title: "Başlık",
};

export default Paragraph;
