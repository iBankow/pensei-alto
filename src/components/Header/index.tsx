import { LogginForm } from "../LogginForm";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>Pensei Alto</h1>
        <nav>
          <a className={styles.active}>Home</a>
          <a>About Us</a>
        </nav>
        <LogginForm />
      </div>
    </header>
  );
}
