
export default function MyComponent(){

    function clickHandler(name){
        console.log('Button Clicked by '+name);
    }

    return (
        <div>
            <button onClick={()=>clickHandler('Saurabh')}>Click Me</button>
        </div>
    );
}
