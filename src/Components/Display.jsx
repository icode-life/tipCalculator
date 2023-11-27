const Display = ({bill, totalTip}) => {
    return <h3>You pay ${bill+totalTip} (${bill} + ${totalTip})</h3>
};

export default Display;