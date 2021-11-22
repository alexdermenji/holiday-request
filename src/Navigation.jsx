import styles from './navigation.module.scss';
import logo from './assets/tesco.svg';
import userIcon from './assets/image-avatar.jpg';
const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <img className={styles.logo} src={logo} alt='logo' />
      </div>
      <div className={styles.user}>
        <img src={userIcon} alt='user avatar' />
      </div>
    </header>
  );
};

export default Navigation;
