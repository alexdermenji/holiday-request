import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.scss';
import classnames from 'classnames';
import HolidayLine from './HolidayLine';
import AddRequestModal from './entities/components/AddRequestModal';
import Navigation from './Navigation';
import { requestsContext } from './modules/requests/dataContext';
import EmptyBlock from './entities/components/EmptyBlock';
import Header from './entities/components/Header';

function App() {
  //TODO filter (крестик и закрытие по пустому месту)
  //TODO calculate days
  //TODO filter requests by status
  //TODO block form while request sending
  //TODO split to components (filter,)

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

  const onHolidayClick = useCallback(() => {
    console.log('click');
  }, []);
  const filterRequests = () => {
    return requestsList
      .filter((item) => item.status === currentFilter.toLowerCase())
      .map((request, index) => (
        <HolidayLine
          onHolidayClick={onHolidayClick}
          {...request}
          id={request.id || index + 1}
          key={request.id || index + 1}
        />
      ));
  };
  const renderRequests = () => {
    if (!requestsList.length) {
      return <EmptyBlock />;
    }

    if (currentFilter) {
      return filterRequests();
    }

    return (
      <>
        {requestsList.map((request, index) => (
          <HolidayLine
            onHolidayClick={onHolidayClick}
            {...request}
            id={request.id || index + 1}
            key={request.id || index + 1}
          />
        ))}
      </>
    );
  };

  const onChangeFilter = (e) => {
    const { innerText } = e.target;
    setCurrentFilter(innerText);
  };

  const onClearFilter = () => {
    setCurrentFilter('');
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
        <Header
          filter={{
            onClearFilter,
            onChangeFilter,
            currentFilter,
          }}
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
        />
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
