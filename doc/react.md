# React

Think in components, like a button (MyButton). Capital letters show React compontents.

    function MyButton() {
    return (
    <button>
    I'm a button
    </button>
    );
    }
    
    export default function MyApp() {
    return (
    <div>
    <h1>Welcome to my app</h1>
    <MyButton />
    </div>
    );

export default -> main component in this file.
JSX = markup syntax used by react. It's stricter than html.

JSX can't return multiple JSX tags. If so, you have to wrap them
with 

    `<div>..</div>` or `<>..</>`.

`className` is the attribute to add CSS. It works the same 
way as `class=""`

To use Javascript in JSX, use `{...}`

## Event Handler

    function MyButton() {
        function handleClick() {
            alert('You clicked me!');
        }

        return (
            <button onClick={handleClick}>
                Click me
            </button>
        );
    }

Updating in screen with state

    import { useState } from 'react';
    
    export default function MyApp() {
        return (
            <div>
                <h1>Counters that update separately</h1>
                <MyButton />
                <MyButton />
            </div>
        );
    }
    
    function MyButton() {
        const [count, setCount] = useState(0);
    
        function handleClick() {
            setCount(count + 1);
        }
    
        return (
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
        );
    }

