import { MainButton } from './Button.styled';

function Button({ name, text }) {
	return (
		<MainButton className={name} >{text}</MainButton>
	);
}

export default Button;
