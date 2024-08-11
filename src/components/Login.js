import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Используем useNavigate для перенаправления

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted', { username, password }); // Отладочное сообщение
    if (username === 'user' && password === 'password') {
      console.log('Login successful'); // Отладочное сообщение
      onLogin(true);
      navigate('/'); // Перенаправляем на главную страницу
    } else {
      console.log('Login failed'); // Отладочное сообщение
      alert('Неправильное имя пользователя или пароль');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Användare:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div>
        <label>Lösenord:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button type="submit">Logga in</button>
    </form>
  );
}

export default Login;
