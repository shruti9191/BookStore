import React from "react";
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper

function MyComponent() {
    return (
        <div className="lightbox-container">
            <SRLWrapper>
                "This is the lightbox area"
            </SRLWrapper>
        </div>
    );
}

export default MyComponent;