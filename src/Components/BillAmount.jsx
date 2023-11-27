const BillAmount = ({bill, onSetBill}) => {

    return (
        <div>
            <label>Type in the check amount </label>
            <input value={bill} onChange={(e) => onSetBill(Number(e.target.value))} type='text' placeholder="Bill amout"></input>
        </div>
    );
};

export default BillAmount;