import classnames from 'classnames';
import plusIcon from '../../../assets/icon-plus.svg';
import styles from './styles.module.scss';
const Button = ({ setModalOpen, isModalOpen, children }) => {
  console.log(setModalOpen, isModalOpen);
  return (
    <div
      onClick={() => setModalOpen(!isModalOpen)}
      className={classnames(styles.button)}
    >
      <div className={classnames(styles.innerButton, styles.flex)}>
        <img src={plusIcon} alt='' />
      </div>
      <span className={classnames(styles.flex)}>{children}</span>
    </div>
  );
};

export default Button;
