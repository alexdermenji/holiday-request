import styles from './styles.module.scss';
import emptyIcon from '../../../assets/illustration-empty.svg';
const EmptyBlock = () => {
  return (
    <div className={styles.empty}>
      <img src={emptyIcon} alt='' />
      <h3>There is nothing here</h3>
      <p>
        Create a new request by clicking the New Request button and get started
      </p>
    </div>
  );
};

export default EmptyBlock;
