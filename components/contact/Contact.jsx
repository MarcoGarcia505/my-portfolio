import styles from './contact.module.css'
function Contact() {
  return (
    <div className={styles.contact_info}>
        <h2 className={styles.contact_tittle}>Get In Touch</h2>
        <p className={styles.contact_description}>Whether you have a question or just want to say hi, <br /> I’ll try my best to get back to you!</p>
        <a href="mailto:markopolo505@outlook.com" className={styles.contact_button_link}>Say Hello!</a>
    </div>
  )
}

export default Contact