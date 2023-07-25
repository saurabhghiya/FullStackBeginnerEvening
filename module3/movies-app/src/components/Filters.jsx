
export default function Filters({filterText}){
    const filterStyles = 'px-[25px] py-[5px] bg-neutral-200 text-neutral-800 rounded-3xl cursor-pointer font-bold hover:bg-neutral-800 hover:text-neutral-200 active:bg-neutral-900 active:text-neutral-200 active:scale-[0.97] durtion-200';
    
    return <span className={filterStyles}>{filterText}</span>
}