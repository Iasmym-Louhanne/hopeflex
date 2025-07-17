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
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <form onSubmit={handleSubmit} className="space-x-2">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          className="border px-2 py-1 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
          Entrar
        </button>
      </form>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </>
  );
}
