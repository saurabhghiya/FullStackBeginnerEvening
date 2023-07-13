import Modal from "./Modal";

export default function AddBtn(props){
    // console.log(props);

    const addBtnHandler = (e)=>{
        e.target.classList.toggle('rotate');
        if(e.target.classList.contains('rotate')){
            console.log('open');
            const modal = <Modal {...props} />;
            console.log(modal);
            
            }
        else{
            console.log('close');
            const modal = <Modal />;
            console.log(modal);
        }
    }

    return <div className="add-btn" onClick={addBtnHandler}>+</div>;
}