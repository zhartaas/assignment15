// Collapse.tsx
import React, { useState, useRef, useEffect } from "react";

const Collapse = ({ isOpen, children }) => {
    const [height, setHeight] = useState(isOpen ? "auto" : "0");
    const contentRef = useRef(null);

    useEffect(() => {
        setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0");
    }, [isOpen]);

    return (
        <div
            style={{
                overflow: "hidden",
                height: isOpen ? "auto" : height,
                transition: "height 0.3s ease-in-out",
            }}
        >
            <div ref={contentRef}>{children}</div>
        </div>
    );
};

export default Collapse;
