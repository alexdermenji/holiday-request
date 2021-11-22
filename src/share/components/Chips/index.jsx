import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const ChipsComponent = (props) => {
  return (
    <div className={classnames(styles.status, styles[props.variant])}>
      {props.children}
    </div>
  );
};

ChipsComponent.propTypes = {
  variant: PropTypes.oneOf(['default', 'aproved', 'pending', 'draft']),
};

//TODO defaultProps not working
ChipsComponent.defaultProps = {
  variant: 'default',
};
export default ChipsComponent;
