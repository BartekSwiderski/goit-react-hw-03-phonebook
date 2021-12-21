import styles from "./Phonebook.module.css";

const ContactForm = ({ save, changeForm }) => {
  return (
    <form className={styles.form} onSubmit={save}>
      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor="name">
          Name
        </label>
        <input
          className={styles.formInput}
          required
          type="text"
          name="name"
          onChange={changeForm}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor="number">
          Number
        </label>
        <input
          className={styles.formInput}
          required
          type="tel"
          name="number"
          onChange={changeForm}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </div>
      <button className={styles.formButton}>Add contact</button>
    </form>
  );
};

export default ContactForm;
