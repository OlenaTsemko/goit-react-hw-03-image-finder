import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ shouldRenderBtn, onButtonClick }) => {
  return (
    shouldRenderBtn && (
      <button className={styles.Button} type="button" onClick={onButtonClick}>
        Load more
      </button>
    )
  );
};

Button.propTypes = {
  shouldRenderBtn: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
