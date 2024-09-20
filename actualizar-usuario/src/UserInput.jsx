import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserInput() {
  const { userName, setUserName } = useContext(UserContext);

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <h2>Actualizar Nombre de Usuario</h2>
      <input
        type="text"
        value={userName} 
        onChange={handleChange}
        placeholder="Escribe tu nombre"
      />
    </div>
  );
}

export default UserInput;
