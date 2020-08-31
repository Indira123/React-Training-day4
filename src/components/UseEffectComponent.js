import React, { useState, useEffect } from 'react';

function UseEffectComponent() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    return (
        <div className='container'>
            <h4>Use Effect Example</h4>
            <p>You Clicked {count} times.</p>
            <button className='btn btn-warning' onClick={() => setCount(count + 1)}>Click me!</button>
        </div>
    )
}
export default UseEffectComponent;