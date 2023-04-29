import { MainButton } from './Button.styled';

function Button({ name, icon, text, type }) {
  return (
    <MainButton className={name} type={type}>
      {icon}
      {text}
    </MainButton>
  );
}

export default Button;
