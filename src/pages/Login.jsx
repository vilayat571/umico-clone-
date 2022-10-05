import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLogin } from '../redux/slices/loginSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getLogin(form));
    navigate('/');
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} action="post">
        <input onChange={(e) => handleChange(e)}
          value={form.username}
          id="username"
          required={true}
          type="text" placeholder='Username' />
        <input onChange={(e) => handleChange(e)}
          value={form.password}
          id="password"
          required={true}
          type="password" placeholder='Password' />
        <button>Login</button>
      </form>
    </div>
  )
};
export default Login;