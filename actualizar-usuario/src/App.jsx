import React, { useEffect, useContext } from 'react';
import { UserProvider, UserContext } from './UserContext';
import UserProfile from './UserProfile';
import UserInput from './UserInput';

function App() {
  const { setUserName } = useContext(UserContext);

  useEffect(() => {
    const userNameFromAPI = "Felipe Larumbe";
    setUserName(userNameFromAPI);
  }, [setUserName]);

  return (
    <div className="App">
      <h1>Aplicación de Contexto de Usuario</h1>
      <UserProfile /> {/*mostramos el nombre actual*/}
      <UserInput />    {/*permite cambiar el nombre*/}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}
