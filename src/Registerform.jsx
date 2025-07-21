import React, { useState } from 'react';

const RegisterForm = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const isDisabled = !form.username || !form.email || !form.password;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <form>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={form.username} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={form.email} onChange={handleChange} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={form.password} onChange={handleChange} />

      <button disabled={isDisabled}>Submit</button>
    </form>
  );
};

export default RegisterForm;
