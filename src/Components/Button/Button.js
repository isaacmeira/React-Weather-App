import React, { useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

import './Styles.scss';

export default function Button(props) {
  const [isLoading, setLoading] = useState('');
  const [isError, setError] = useState('');

  async function executeFunction() {
    try {
      setLoading(true);
      const response = await props.execute();
      if (response) {
        setLoading(false);
      } else {
        throw new Error();
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="defaultBtn">
      {isLoading ? (
        <PropagateLoader size={10} color="#e9e9e9" />
      ) : (
        <button type="button" onClick={() => executeFunction()}>
          {' '}
          {props.label || isError}
        </button>
      )}
    </div>
  );
}
