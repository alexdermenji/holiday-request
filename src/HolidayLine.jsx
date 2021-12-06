import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './holidayLine.module.scss';
import { Chips } from './share/components';
import icon from './assets/icon-arrow-right.svg';
const HolidayLine = ({ id, from, to, days, status, onHolidayClick }) => {
  return (
    <div className={classnames(styles.flex, styles.content)}>
      <div
        onClick={onHolidayClick}
        className={classnames(styles.flex, styles.left)}
      >
        <span className={classnames(styles.holidayId)}>
          <span className={styles.title}>ID: </span>
          {id}
        </span>
        <span className={classnames(styles.date)}>
          <span className={styles.title}>from: </span> {from}
        </span>
        <span className={classnames(styles.date)}>
          <span className={styles.title}>to: </span> {to}
        </span>
        <span className={classnames(styles.date)}>
          <span className={styles.title}>days: </span> {days}
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
  status: PropTypes.oneOf(['aproved', 'pending', 'draft', 'rejected']),
};

export default HolidayLine;
