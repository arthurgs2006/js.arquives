import styles from "./styles.module.scss"

export default function(props){
  return(
    <button className={styles.button}>
      {props.children}
    </button>
  )
}