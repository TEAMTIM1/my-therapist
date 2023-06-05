
const RadioButton = ({ type, id, name, value, onChange, label }) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioButton