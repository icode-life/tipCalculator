const Display = ({bill}) => {
    const grandTotal = 0;
    const total = 0;
    const aggregatedTip = 0;

    return <h3>You pay ${Number(grandTotal)} (${bill} + ${Number(aggregatedTip)} tip)</h3>
};

export default Display;