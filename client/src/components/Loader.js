import React, { useState } from "react";
import DotLoader from "react-spinners/DotLoader";

function Loader() {
    let [loading, setLoading] = useState(true);

    return (
        <div className="sweet-loading loader-container">
            <DotLoader
                color="#daa520"
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Loader;
