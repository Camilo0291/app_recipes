import "./Button.css"

const Button= (props) => {
  return (
    <div className="container-button">
      <input type="button" value={props.text} onClick={props.onClick} /> {/*con este props puedo hacer que personalice el nombre del boton para cada boton */}
    </div>
  )
}

export default Button
