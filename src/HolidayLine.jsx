import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './holidayLine.module.scss';
import { Chips } from './share/components';
import icon from './assets/icon-arrow-right.svg';
const HolidayLine = ({ status }) => {
  return (
    <div className={classnames(styles.flex, styles.content)}>
      <div className={classnames(styles.flex, styles.left)}>
        <span className={classnames(styles.holidayId)}>
          {' '}
          <span className={styles.title}>ID: </span>#2244
        </span>
        <span className={classnames(styles.date)}>
          <span className={styles.title}>from: </span> 22.06.2021
        </span>
        <span className={classnames(styles.date)}>
          {' '}
          <span className={styles.title}>to: </span> 30.06.2021
        </span>
        <span className={classnames(styles.date)}>
          {' '}
          <span className={styles.title}>days: </span> 6
        </span>
      </div>
      <div className={classnames(styles.flex, styles.right)}>
        <Chips variant={status}>{status}</Chips>
        <div className={icon}>
          <img src={icon} alt='' />
        </div>
      </div>
    </div>
  );
};

HolidayLine.propTypes = {
  status: PropTypes.oneOf(['aproved', 'pending', 'draft']),
};

export default HolidayLine;
