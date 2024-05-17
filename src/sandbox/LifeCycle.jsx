import React, { useEffect } from 'react';

export default function Lifecycle() {

useEffect(() => {
    console.log("The component has mount");

    return () => {
        console.log("The component has UNmount");
    };
}, []);

  return <div>life cycle</div>;
}
