import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from './Checkbox';
import { InputField } from './InputField';

const main = (): string => `Welcome to React UI Components world`;

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 3000);
}

const App: React.FunctionComponent<{}> = () => (
  <Fragment>
    <Checkbox label="yes" onChangeHandler={(): void => console.log('hey')} />
    <InputField label="Name: " />
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById('app'));

export { main, Checkbox, InputField };
