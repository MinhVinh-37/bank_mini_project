export default function InputForm({ title, type, defaultValue }) {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <br />
      <input name={title} defaultValue={defaultValue} type={type} />
      <br />
    </>
  );
}
