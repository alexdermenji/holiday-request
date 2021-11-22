import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './holidayLine.module.scss';
import { Chips } from './share/components';
import icon from './assets/icon-arrow-right.svg';
const HolidayLine = (props) => {
  return (
    <div className={classnames(styles.flex, styles.content)}>
      <div className={classnames(styles.flex, styles.left)}>
        <span className={classnames(styles.holidayId)}>
          {' '}
          <span className={styles.title}>ID: </span>
          {props.id}
        </span>
        <span className={classnames(styles.date)}>
          <span className={styles.title}>from: </span> {props.from}
        </span>
        <span className={classnames(styles.date)}>
          <span className={styles.title}>to: </span> {props.to}
        </span>
        <span className={classnames(styles.date)}>
          <span className={styles.title}>days: </span> {props.days}
        </span>
      </div>
      <div className={classnames(styles.flex, styles.right)}>
        <Chips variant={props.status}>{props.status}</Chips>
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
