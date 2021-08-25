import { GrArchlinux } from "react-icons/gr";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const isUserLoggedIn = false;
  return isUserLoggedIn ? (
    <button className={styles.signInButton} type="button">
      <GrArchlinux color="var(--rootred)" />
      Tiago Bankow
      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <GrArchlinux />
      Sign In
    </button>
  );
}
