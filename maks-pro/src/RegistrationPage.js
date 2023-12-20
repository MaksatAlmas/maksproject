// RegistrationPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link из react-router-dom

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Зарегистрирован пользователь:', { username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <div id="registration-container">
      <h2>Регистрация</h2>
      <form id="registration-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
      <p>
        Уже есть аккаунт? <Link to="/">Войдите</Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
