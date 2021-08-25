import styles from "./styles.module.scss";

export function GlitchComponent({ text }) {
  return (
    <div className={styles.glitch}>
      <span aria-hidden="true">{text}</span>
      {text}
      <span aria-hidden="true">{text}</span>
    </div>
  );
}
