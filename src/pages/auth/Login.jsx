import Button from "../../components/Button";
import "./Login.css";
import { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import Swal from "sweetalert2";

const URL_USERS = 'http://localhost:3000/users';



function Login() {

const [stateUsers, setStateUsers] = useState([])
const [stateUser, setStateUser] = useState('')
const [statePassword, setStatePassword] = useState('')

function getUsers(){
  fetch(URL_USERS)
    .then(response => response.json())
    .then((json)=> setStateUsers(json))
}

useEffect(()=>{
  getUsers()
}, [])

let redirection = useNavigate();

function login(){
  if(stateUser === "" || statePassword === ""){
    Swal.fire({
      icon: "warning",
      title: "¡Campos incompletos!",
      text: "Por favor, complete todos los campos para Iniciar Sesión.",
      confirmButtonColor: "#054a61",
    });
    return; // Evita continuar si los campos están vacíos
  }
  if(searchUser()){
    let timerInterval;
      Swal.fire({
        title: "¡Bienvenido!",
        html: "Será redirecciónado al dashboard en <b></b> milisegundos.",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
          redirection("/dashboard");
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
  }else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Usuario y/o contraseña incorrecto!",
      confirmButtonColor: "#054a61", //Cambia el color del botón
    });
  }
}

function searchUser(){
  let auth = stateUsers.some((item)=>stateUser == item.user && statePassword == item.password);
  return auth;
}

  return (
    <div className="container-login">
      <div className="container-logo">
        <Link to="/"></Link>
      </div>
      <form className="login-form" action="">
        <h1 className="title-login">Iniciar Sesión</h1>
        <input onChange={(e)=> setStateUser(e.target.value)} type="text" placeholder="Usuario" />
        <input onChange={(e)=> setStatePassword(e.target.value)} type="password" placeholder="Contraseña" />
        <Button onClick={login} className="button" text="Inicia Sesión" />     {/* <input type="button" value="Ingresar" /> */}
        <Link  className="link" to="/register">
          Si no tienes cuenta Regístrate aquí
        </Link>
        <Link className="link" to="/">
          Volver al inicio
        </Link>
      </form>
    </div>
  );
}

export default Login;
