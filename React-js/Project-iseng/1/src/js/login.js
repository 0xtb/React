import '../css/login.css';



function Login() {
  return (
    <div className="dis-login">
      <div className="login">
        <div className="login-con">
          <form action="/admin" methode="POST">
            <h1>Login</h1>
            <input type="text" className="user" placeholder="username..." /><br />
            <input type="text" className="pass" placeholder="password..." /><br />
            <a href="#" className="forgot" >forgot password?</a><br />
            <button type="submit" class="btn-sub">Kirim</button>
          </form>
        </div>
      </div>
    </div>
  )
}



export default Login;
