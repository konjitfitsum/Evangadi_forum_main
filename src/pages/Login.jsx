import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {
  const emailDom = useRef();
  const passwordDom = useRef();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;
    if (!emailValue || !passValue) {
      alert("Please Provide all required information");
      return;
    }
    try {
      const { data } = await axios.post("/api/users/login", {
        email: emailValue,
        password: passValue,
      });
      alert("login Successful...");
      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (error) {
      alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>email : --- </span>
          <input ref={emailDom} type="email" placeholder="email" />
        </div>
        <br />
        <div>
          <span>password : --- </span>
          <input ref={passwordDom} type="password" placeholder="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to={"/register"}>Register</Link>
    </section>
  );
}

export default Login;
