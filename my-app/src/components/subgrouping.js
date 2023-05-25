import React, { useEffect, useRef } from "react";
import { Timeline } from "vis-timeline";


const VisTimelines = () => { 

    const visJsRef = useRef(null);

    useEffect(()=> {
        // Once the ref is created, we'll be able to use vis
    }, [visJsRef]);
    return <div ref={visJsRef} />
};

export default VisTimelines;