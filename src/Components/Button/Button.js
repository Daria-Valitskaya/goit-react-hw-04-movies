import s from "./Button.module.css";

export default function Button({ onClick, children, type }) {
  return (
    <button className={s.Button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
