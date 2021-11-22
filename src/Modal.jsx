import classnames from 'classnames';
import styles from './modal.module.scss';

const Modal = ({ closeModal, isOpen }) => {
  const date = new Date(Date.now()).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <div className={classnames(styles.wrap)}>
      <form className={classnames(styles.content)}>
        <h1>Holiday request form</h1>
        <h4>Personal details</h4>

        <div className={classnames(styles.data)}>
          <div className={classnames(styles.input)}>
            <label htmlFor='firstName'>First name</label>
            <input required type='text' id='firstName' placeholder='John' />
          </div>
          <div className={classnames(styles.input)}>
            <label htmlFor='lastName'>Last Name</label>
            <input required type='text' id='lastName' placeholder='Adams' />
          </div>
          <div className={classnames(styles.flex, styles.inputsRow)}>
            <div className={classnames(styles.input)}>
              <label htmlFor='DCAM number'>DCAM number</label>
              <input required type='text' id='dcamNumber' placeholder='7915' />
            </div>
            <div className={classnames(styles.input)}>
              <label htmlFor='Team'>Team</label>
              <input required type='text' id='team' placeholder='NZ-8' />
            </div>
            <div className={classnames(styles.input)}>
              <label htmlFor='requestDate'>Request date</label>
              <input
                required
                type='text'
                id='requestDate'
                defaultValue={date}
              />
            </div>
          </div>
          <h4>Select holidays dates</h4>
          <div className={classnames(styles.flex, styles.inputsRow)}>
            <div className={classnames(styles.input)}>
              <label htmlFor='fromDate'>From</label>
              <input
                required
                type='text'
                id='fromDate'
                placeholder='22.11.2021'
              />
            </div>
            <div className={classnames(styles.input)}>
              <label htmlFor='toDate'>To</label>
              <input
                required
                type='text'
                id='toDate'
                placeholder='30.11.2021'
              />
            </div>
          </div>
          <div className={styles.save}>
            <div className={styles.left}>
              <button
                onClick={() => closeModal(!isOpen)}
                className={classnames(styles.red, styles.button)}
              >
                Cancel
              </button>
            </div>
            <div className={styles.right}>
              <button className={classnames(styles.darkPurple, styles.button)}>
                Save draft
              </button>
              <button className={classnames(styles.purple, styles.button)}>
                Create request
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Modal;
