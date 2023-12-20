
import styles from "./Pagination.module.css";

const Pagination = () => {

  return (
    <div className={styles.containerPagination}>
      <button >
        Prev
      </button>
      <span>
      </span>
      <button >
        Next
      </button>
    </div>
  );
};

export default Pagination;