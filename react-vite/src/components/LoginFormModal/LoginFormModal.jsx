import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from '../../redux/session';
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleDemoUser = () => {
    return dispatch(sessionActions.thunkLogin({credential: 'Demo-lition', password: 'password22'}))
    .then(closeModal)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("step 1")

    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  return (
    <div className="login">
    <h1>twistr</h1>
    <span>Welcome to your corner of the internet. You'll never be bored again.</span>
      <form className="login-info" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && <p>{errors.password}</p>}
        <button type="submit">Log In</button>
        <button
              className='demo-user'
              onClick={handleDemoUser}
            >Demo User</button>
      </form>
    </div>
  );
}

export default LoginFormModal;
