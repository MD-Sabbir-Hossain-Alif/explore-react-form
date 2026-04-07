import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Friend = () => {
    const [money] = use(MoneyContext);

    return (
        <div className="text-amber-900">
            <h2>Friend</h2>
            <p>Family have: {money}</p>
        </div>
    );
};

export default Friend;
