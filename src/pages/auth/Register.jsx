import './Register.css'
import "../../index.css"
import Button from "../../components/Button";
import {Link, useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { v4 } from 'uuid';


const URL_USERS = 'http://localhost:3000/users';

const Register = () => {

  const [stateUsers, setStateUsers] = useState([])
  const [stateName, setStateName] = useState('')
  const [stateUser, setStateUser] = useState('')
  const [statePassword, setStatePassword] = useState('')
  const [stateEmail, setStateEmail] = useState('')


  const navigate = useNavigate(); // Inicializa useNavigate

  // Expresion regular para validar el correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Expresion regular para validar el password (que sea alfanumerica, minimo 6 caracteres y minimo 3 digitos)
  const passwordRegex = /^(?=.*[A-Za-z])(?=(.*\d){3,}).{6,}$/; 


  function getUsers(){
    fetch(URL_USERS)
      .then(response => response.json())
      .then((json)=> setStateUsers(json))
  }
  
  useEffect(()=>{
    getUsers()
  }, [])

  function searchUser(){
    let auth = stateUsers.some((item)=>stateUser == item.user || stateEmail == item.email);
    return auth;
  }

  //Función para crear el usuario si no se encuentra en la BD
  function createUser(){
    let newUser = {
      id: v4(),
      name: stateName,
      user: stateUser,
      password: statePassword,
      email: stateEmail
    }
    fetch(URL_USERS, {
      method:'POST',
      body: JSON.stringify(newUser)
    })
      .then(response => response.json())
      .then(data =>{
        console.log("Usuario creado exitosamente!", data);
    
        // Alerta de éxito y redirección
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "¡Usuario creado exitosamente!"
        }).then(() => {
          navigate('/login'); // Redirige a /login después de la alerta
        });
      });
  }

  //Función para registrar usuarios
  function registerUser(){
    if (!fieldsValidate()) return; //Valida que los campos esten llenos
    if (!passwordRegex.test(statePassword)) { //Valida que el password cumpla con la expresion regular
      Swal.fire({
        icon: "error",
        title: "¡Contraseña inválida!",
        text: "Por favor, verifica que tenga minimo 3 digitos y sea alfanumérica.",
        confirmButtonColor: "#054a61",
      });
      return; // Evita continuar si el correo no es válido
    }
    if (!emailRegex.test(stateEmail)) { //Valida que el correo cumpla con la expresion regular
      Swal.fire({
        icon: "error",
        title: "¡Correo electrónico inválido!",
        text: "Por favor, introduce un correo electrónico válido.",
        confirmButtonColor: "#054a61",
      });
      return; // Evita continuar si el correo no es válido
    }
    if(searchUser()){ //Valida que el usuario no exista en la BD
      console.log("Usuario ya existe en la base de datos...");
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: true,
        // timer: 3000,
        timerProgressBar: false,
        confirmButtonColor: '#054a61',
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Oops..",
        text: "¡Usuario ya existe en la base de datos!.",
      });
    }else{
      createUser()
    }
  }

  //Funcion para validar que los campos no esten vacios
  function fieldsValidate(){
    if (!stateUser|| !statePassword || !stateName || !stateEmail) {
      Swal.fire({
        icon: "warning",
        title: "¡Campos incompletos!",
        text: "Por favor, complete todos los campos para Registrarse.",
        confirmButtonColor: "#054a61",
      });
      return false; // Evita continuar si los campos están vacíos
    }
    return true // Retorna true si todos los campos son válidos
  }


  return (
    <div className="container-register">
      <div className="container-logo">
      <Link to="/"></Link>
      </div>
      <form className="login-form" action="">
        <h1 className="title-register">Registro</h1>
        <input onChange={(e)=>setStateName(e.target.value)} type="text" placeholder="Nombre Completo" />
        <input onChange={(e)=>setStateUser(e.target.value)} type="text" placeholder="Usuario" />
        <input onChange={(e)=>setStatePassword(e.target.value)} type="text" placeholder="Contraseña" />
        <input onChange={(e)=>setStateEmail(e.target.value)} type="email" placeholder="Correo Electronico" />
        <Button onClick={registerUser} className="button" text="Registrarse" />  {/* <input type="button" value="Registrarse" /> */}
        <Link  className="link" to="/login">
          Si ya tienes cuenta inicia sesión aquí
        </Link>
        <Link className="link" to="/">
          Volver al inicio
        </Link>
      </form>
    </div>
  )
}

export default Register