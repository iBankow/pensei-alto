import react, { useState } from "react";

import styles from "./styles.module.scss";

export function LogginForm() {
  return (
    <section>
      <form action="post" className={styles.formContainer}>
        <div className={styles.divForm}>
          <div className={styles.divInput}>
            <input type="email" id="email" />
            <label>E-mail</label>
          </div>
          <div className={styles.divInput}>
            <input type="password" id="password" />
            <label>Password</label>
          </div>
        </div>
        <button>Loggin</button>
      </form>
    </section>
  );
}
