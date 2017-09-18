import React from 'react';

/**
 * A square on the game board.
 * 
 * @param {object} props The component properties.
 * @returns {Element} The Square component.
 */
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;