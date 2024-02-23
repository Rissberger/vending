import React from 'react';
import { Link } from 'react-router-dom';

function Snack2() {
  return (
    <div>
      <h2>Snack 2</h2>
      <p>Sweet and savory.</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Snack2;
