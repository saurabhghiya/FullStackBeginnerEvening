
export default function Modal(props){

    return <div className='modal'>
        <div className="option">Select Location</div>
        {props.list.map((city) => <div key={city} className="option">{city}</div>)}
    </div>;
}