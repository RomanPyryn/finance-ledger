import PropTypes from 'prop-types';
import { MainButton } from './Button.styled';

function Button({ onName, onIcon, onText, onType }) {
  return (
    <MainButton className={onName} type={onType}>
      {onIcon}
      {onText}
    </MainButton>
  );
}

Button.propTypes = {
  onName: PropTypes.string.isRequired,
  onIcon: PropTypes.element,
  onText: PropTypes.string.isRequired,
  onType: PropTypes.string.isRequired,
};

export default Button;
