import styles from './Score.module.css'

export function Score(){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>You result</h1>

            <div className={styles.result}>
                <h1>76</h1>
                <h3>of 100</h3>
            </div>

            <h1>Great</h1>
            <p>You score higher then 65% of the peoples who have taken these tests.</p>
        </div>
    )
}