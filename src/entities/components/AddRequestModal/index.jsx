import classnames from 'classnames';
import { useState } from 'react';
import styles from './modal.module.scss';
const initialFormData = {
  firstName: '',
  lastName: '',
  number: '',
  team: '',
  requestDate: '',
  from: '',
  to: '',
};

const AddRequestModal = ({ closeModal, isOpen, onFormSubmit }) => {
  const [formData, setFormData] = useState(initialFormData);

  //TODO draft handler
  const onSubmitFormHandler = async (event) => {
    event.preventDefault();
    await onFormSubmit(formData);
    closeModal();
  };

  const onInputChangeHandler = (event) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className={classnames(styles.wrap)}>
      <form
        className={classnames(styles.content)}
        onSubmit={onSubmitFormHandler}
      >
        <h1>Holiday request form</h1>
        <h4>Personal details</h4>

        <div className={classnames(styles.data)}>
          <div className={classnames(styles.input)}>
            <label htmlFor='firstName'>First name</label>
            <input
              onChange={onInputChangeHandler}
              value={formData.firstName}
              required
              type='text'
              id='firstName'
              placeholder='John'
            />
          </div>
          <div className={classnames(styles.input)}>
            <label htmlFor='lastName'>Last Name</label>
            <input
              onChange={onInputChangeHandler}
              value={formData.lastName}
              type='text'
              id='lastName'
              placeholder='Adams'
            />
          </div>
          <div className={classnames(styles.flex, styles.inputsRow)}>
            <div className={classnames(styles.input)}>
              <label htmlFor='DCAM number'>DCAM number</label>
              <input
                onChange={onInputChangeHandler}
                value={formData.number}
                type='text'
                id='number'
                placeholder='7915'
              />
            </div>
            <div className={classnames(styles.input)}>
              <label htmlFor='Team'>Team</label>
              <input
                onChange={onInputChangeHandler}
                value={formData.team}
                type='text'
                id='team'
                placeholder='NZ-8'
              />
            </div>
            <div className={classnames(styles.input)}>
              <label htmlFor='requestDate'>Request date</label>
              <input
                onChange={onInputChangeHandler}
                value={formData.requestDate}
                type='text'
                id='requestDate'
              />
            </div>
          </div>
          <h4>Select holidays dates</h4>
          <div className={classnames(styles.flex, styles.inputsRow)}>
            <div className={classnames(styles.input)}>
              <label htmlFor='fromDate'>From</label>
              <input
                onChange={onInputChangeHandler}
                value={formData.from}
                type='text'
                id='from'
                placeholder='22.11.2021'
              />
            </div>
            <div className={classnames(styles.input)}>
              <label htmlFor='toDate'>To</label>
              <input
                onChange={onInputChangeHandler}
                value={formData.to}
                type='text'
                id='to'
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
              <button
                type='submit'
                className={classnames(styles.purple, styles.button)}
              >
                Create request
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddRequestModal;
