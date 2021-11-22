import { useState } from 'react';
import styles from './app.module.scss';
import classnames from 'classnames';

import tickIcon from './assets/icon-arrow-down.svg';
import emptyIcon from './assets/illustration-empty.svg';

import HolidayLine from './HolidayLine';
import Button from './share/components/Button';
import Modal from './Modal';
import Navigation from './Navigation';

function App() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className={classnames(styles.app, styles.flex)}>
      <Navigation />
      <div className={classnames(styles.home, styles.container)}>
        <header className={classnames(styles.header, styles.flex)}>
          <div
            className={classnames(
              styles.left,
              styles.flex,
              styles['flex-column']
            )}
          >
            <h1>Holiday requests</h1>
          </div>
          <div className={classnames(styles.right, styles.flex)}>
            <div
              onClick={() => {
                setFilterOpen(!isFilterOpen);
              }}
              className={classnames(styles.filter, styles.flex)}
            >
              <span>Filter by status</span>
              <img src={tickIcon} alt='' />
              {isFilterOpen && (
                <ul className={classnames(styles.filterMenu)}>
                  <li>Draft</li>
                  <li>Waiting for aproval</li>
                  <li>Aproved</li>
                  <li>Rejected</li>
                  <li>Clear filter</li>
                </ul>
              )}
            </div>
            <Button isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
              New request
            </Button>
          </div>
        </header>
        <main>
          <div>
            <HolidayLine status='pending' />
            <HolidayLine status='aproved' />
            <HolidayLine status='draft' />
          </div>
          <div className={styles.empty}>
            <img src={emptyIcon} alt='' />
            <h3>There is nothing here</h3>
            <p>
              Create a new request by clicking the New Request button and get
              started
            </p>
          </div>
        </main>
        {isModalOpen && (
          <Modal closeModal={setModalOpen} isOpen={isModalOpen} />
        )}
      </div>
    </div>
  );
}

export default App;
