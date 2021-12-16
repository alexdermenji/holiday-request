import classnames from 'classnames';
import styles from './styles.module.scss';
const EditButton = ({ children, color }) => {
  return (
    <div className={classnames(styles.button, styles[color])}>
      <span className={classnames(styles.flex)}>{children}</span>
    </div>
  );
};

export default EditButton;
