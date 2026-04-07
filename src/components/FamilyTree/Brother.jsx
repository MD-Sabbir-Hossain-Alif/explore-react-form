import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Brother = () => {
    const [money, setMoney] = use(MoneyContext);
    return (
        <div>
            <h2>Brother</h2>
            <button
                onClick={() => setMoney(money + 2000)}
                className="btn btn-info"
            >
                Add 2000Tk
            </button>
        </div>
    );
};

export default Brother;
