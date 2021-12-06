import classnames from 'classnames';
import styles from './styles.module.scss';
import tickIcon from '../../../assets/icon-arrow-down.svg';
import { useState } from 'react';
const FilterRequests = ({ currentFilter, onChangeFilter }) => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  return (
    <div
      onClick={() => {
        setFilterOpen(!isFilterOpen);
      }}
      className={classnames(styles.filter, styles.flex)}
    >
      <span>{currentFilter === '' ? 'Filter by status' : currentFilter}</span>
      <img src={tickIcon} alt='' />
      {isFilterOpen && (
        <ul className={classnames(styles.filterMenu)}>
          <li onClick={onChangeFilter}>Draft</li>
          <li onClick={onChangeFilter}>Pending</li>
          <li onClick={onChangeFilter}>Aproved</li>
          <li onClick={onChangeFilter}>Rejected</li>
          <li onClick={onChangeFilter}>Clear filter</li>
        </ul>
      )}
    </div>
  );
};

export default FilterRequests;
