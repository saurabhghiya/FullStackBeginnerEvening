
export default function AddBtn(){

    const addBtnHandler = (e)=>{
        e.target.classList.toggle('rotate');
        const modal =  document.querySelector('.modal');
        if(e.target.classList.contains('rotate')) modal.classList.add('slide');
        else modal.classList.remove('slide');
    }

    return <div className="add-btn" onClick={addBtnHandler}>+</div>;
}