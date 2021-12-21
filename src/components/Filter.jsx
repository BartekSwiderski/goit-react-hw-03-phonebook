import styles from "./Phonebook.module.css";

const Filter = ({ setFilter }) => {
  return (
    <div className={styles.filter}>
      <label className={styles.filterLabel} htmlFor="filter">
        Find contacts by name{" "}
      </label>
      <input
        className={styles.filterInput}
        required
        type="text"
        name="filter"
        onChange={setFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Please give me a name."
      />
    </div>
  );
};

export default Filter;
