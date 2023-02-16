import styles from "../vote.module.scss";

const VoteActions = ({leaveVote}) => {
    return (
        <div className={styles.block}>
            <h4 className={styles.blockTitle}>Leave your vote</h4>
            <button onClick={()=> leaveVote("republicans")}>Republicans</button>
            <button onClick={()=> leaveVote("democrats")}>Democrats</button>
        </div>
    )
}

export default VoteActions;
