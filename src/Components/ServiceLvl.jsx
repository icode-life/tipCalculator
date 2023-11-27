import { useState } from "react";

const ServiceLvl = ({children, tip, onSubmit}) => {

    return(
        <div>
            <span>{children}</span>
            <select value={tip} onChange={(e) => onSubmit(Number(e.target.value))}>
                <option value='0'>Dissatisfied (0%)</option>
                <option value='5'>it was okay (5%)</option>
                <option value='10'>it was good (10%)</option>
                <option value='20'>Absolutely Amazing (20%)</option>
            </select>
        </div>
    );
};

export default ServiceLvl;