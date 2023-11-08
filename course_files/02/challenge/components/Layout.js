import Link from "next/link"
import styles from '../styles/Home.module.css'

/* Menu Component here */

export default function Layout({children }) {
    console.log("children", children);
    return(
        <div className={styles.container}>
            {/* insert Menu here */}
            {children}
        </div>)
}