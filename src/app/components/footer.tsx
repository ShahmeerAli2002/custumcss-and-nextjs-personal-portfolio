  import styles from './footer.module.css';

  const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.text}>Created with ♥️ by <span className={styles.name}>Shahmeer Ali</span></p>
        </div>
      </footer>
    );
  };

  export default Footer;

