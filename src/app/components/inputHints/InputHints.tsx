import style from "./InputHints.module.css";

interface InputFunctionHintsProps {
  hintText: string
}

export default function InputFunctionHints({hintText}: InputFunctionHintsProps) {
  return (
    <p className={style.navigationHint}>{hintText}</p>
  );
} 
