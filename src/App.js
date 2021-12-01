import { useEffect, useState } from 'react';
import styles from './app.module.scss';
import classnames from 'classnames';

import tickIcon from './assets/icon-arrow-down.svg';
import emptyIcon from './assets/illustration-empty.svg';

import HolidayLine from './HolidayLine';
import { Button } from './share/components';
import AddRequestModal from './entities/components/AddRequestModal';
import Navigation from './Navigation';
import { requestsContext } from './modules/requests/dataContext';

function App() {
  //TODO calculate days
  //TODO filter requests by status
  //TODO block form while request sending
  //TODO split to components (filter,)

  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [requestsList, setRequestsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentFilter, setCurrentFilter] = useState('');

  useEffect(() => {
    requestsContext
      .getRequest()
      .then((response) => setRequestsList(response.data))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const renderRequests = () => {
    if (!requestsList.length) {
      return (
        <div className={styles.empty}>
          <img src={emptyIcon} alt='' />
          <h3>There is nothing here</h3>
          <p>
            Create a new request by clicking the New Request button and get
            started
          </p>
        </div>
      );
    }
    return (
      <div>
        {requestsList.map((request) => (
          <HolidayLine {...request} key={request.id} />
        ))}
      </div>
    );
  };

  const onChangeFilter = (e) => {
    const { innerText } = e.target;
    setCurrentFilter(e.target.innerText);
  };

  const addRequestHandler = async (data) => {
    data.status = 'pending';
    try {
      await requestsContext.addRequest(data);
      setRequestsList((prevState) => [...prevState, data]);
    } catch (error) {
      console.log(error);
    }
  };

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
              <span>
                {currentFilter === '' ? 'Filter by status' : currentFilter}
              </span>
              <img src={tickIcon} alt='' />
              {isFilterOpen && (
                <ul className={classnames(styles.filterMenu)}>
                  <li onClick={onChangeFilter}>Draft</li>
                  <li>Pending</li>
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
        <main>{isLoading ? 'Loading...' : renderRequests()}</main>
        {isModalOpen && (
          <AddRequestModal
            onFormSubmit={addRequestHandler}
            closeModal={setModalOpen}
            isOpen={isModalOpen}
          />
        )}
      </div>
    </div>
  );
}

export default App;
