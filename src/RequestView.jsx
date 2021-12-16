import classNames from 'classnames';
import styles from './RequestView.module.scss';
import back from './assets/icon-arrow-left.svg';
import ChipsComponent from './share/components/Chips';
import EditButton from './share/components/EditButton';

const RequestView = ({ data }) => {
  console.log(data);
  return (
    <div className={classNames(styles.container, styles.requestView)}>
      <a href='/' className={classNames(styles.navLink, styles.flex)}>
        <img src={back} alt='Back' className={styles.navText} />{' '}
        <span> Go back</span>
      </a>
      <header className={styles.header}>
        <div className={styles.left}>
          <span className={styles.status}>Status</span>
          <span>
            <ChipsComponent variant={data.status}>{data.status}</ChipsComponent>
          </span>
        </div>
        <div className={styles.right}>
          <EditButton color='grey'>Edit</EditButton>
          <EditButton color='red'>Delete</EditButton>
          <EditButton color='violet'>Mark as aproved</EditButton>
        </div>
      </header>
      <div className='requestDetails'>
        <div className='top'>Request #{data.id}</div>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <span>First Name: {data.firstName}</span>
            <span>Last Name: {data.lastName}</span>
            <span>Team Number: {data.number}</span>
          </div>
          <div className={styles.contentRight}>
            <span>Request Date: {data.requestDate}</span>
            <span>Team Number: {data.team}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestView;
