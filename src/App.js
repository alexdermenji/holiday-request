
import styles from "./app.module.scss"
import classnames from 'classnames';
import plusIcon from './assets/icon-plus.svg';
import tickIcon from './assets/icon-arrow-down.svg';
import { Chips } from './share/components';

function App() {
  return (
    <div className={classnames(styles.home, styles.container)}>
      <header className={classnames(styles.header, styles.flex)}>
        <div className={classnames(styles.left, styles.flex, styles['flex-column'])}>
          <h1>Holiday requests</h1>
          <span>There are 3 total holiday request</span>
        </div>
        <div className={classnames(styles.right, styles.flex)}>
          <div className={classnames(styles.filter, styles.flex)}>
            <span>Filter by status</span>
            <img src={tickIcon} alt="" />
            <ul className={classnames(styles.filterMenu)}>
              <li>Draft</li>
              <li>Waiting for aproval</li>
              <li>Aproved</li>
              <li>Rejected</li>
              <li>Clear filter</li>
            </ul>
          </div>
          <div className={classnames(styles.button, styles.flex)}>
            <div className={classnames(styles.innerButton, styles.flex)}>
              <img src={plusIcon} alt="" />
            </div>
            <span>New request</span>
          </div>
        </div>
      </header>
      <Chips>Paid</Chips>
    </div>



  );
}

export default App;
