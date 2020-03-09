import React from 'react';
import UserForm from './UserForm';
import Name from './NameComponent';
import Location from './LocationComponent';

export default function Context() {
  return (
    <div className="App">
      <h2 className="is-size-4">
        We'll use the React Context API to pass and receive data in any
        component.
      </h2>
      <div className="container">
        <UserForm />

        <h2 className="is-size-4">Display User Info Here 👇</h2>
        <p>
          These two children components will receive data. These could be nested
          components.
        </p>
        <Name />
        <Location />
      </div>
    </div>
  );
}
