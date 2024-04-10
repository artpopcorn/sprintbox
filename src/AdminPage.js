import React, { useState } from 'react';

function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
    } else {
      alert('Неверный логин или пароль');
    }
  };

  if (isLoggedIn) {
    return <div>Содержимое для администратора</div>;
  }

  return (
    <div>
      <h1>Вход для администратора</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Логин"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default AdminPage;
