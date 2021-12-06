import classnames from 'classnames';
import styles from './styles.module.scss';
import FilterRequests from '../FilterRequests';
import { Button } from '../../../share/components';

const Header = ({ filter, isModalOpen, setModalOpen }) => {
  return (
    <header className={classnames(styles.header, styles.flex)}>
      <div
        className={classnames(styles.left, styles.flex, styles['flex-column'])}
      >
        <h1>Holiday requests</h1>
      </div>
      <div className={classnames(styles.right, styles.flex)}>
        <FilterRequests
          onClearFilter={filter.onClearFilter}
          currentFilter={filter.currentFilter}
          onChangeFilter={filter.onChangeFilter}
        />
        <Button isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
          New request
        </Button>
      </div>
    </header>
  );
};

export default Header;
