import { useState } from 'react';
import Router from 'next/router';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      Router.push('/admin/panel');
    } else {
      setError('Senha incorreta');
    }
  };

  return (
      <>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
    </>
  );
}
