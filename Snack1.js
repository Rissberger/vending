import React from 'react';
import { Link } from 'react-router-dom';

function Snack1() {
  return (
    <div>
      <h2>Snack 1</h2>
      <p>Delicious and crunchy.</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Snack1;
