import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { goods } from './goods';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === ''
          ? 'No goods selected'
          : `${selectedGood} is selected`}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={selectedGood === good ? 'has-background-success-light' : ''}
            >
              <td>
                {selectedGood === '' && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setSelectedGood(good)}
                  >
                    Add
                  </button>
                )}

                {selectedGood === good && (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood('')}
                  >
                    Remove
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
