import { MainButton } from './Button.styled';

function Button({ name, icon, text }) {
  return (
    <MainButton className={name}>
      {icon}
      {text}
    </MainButton>
  );
}

export default Button;
