import { Breathing } from 'react-shimmer'

export default function MovieCard({ id, isWatchlist, posterUrl}) {
    const cardClass = "moviecard relative overflow-hidden w-[200px] h-[300px] bg-cover bg-center rounded-xl hover:scale-105 duration-200 hover:cursor-pointer active:scale-[1.02]";
    
    return <div className={cardClass}>
        {isWatchlist?
        <span key={'star'} id={id} className="material-symbols-rounded text-yellow-400 absolute right-[10px] text-3xl">
            star
        </span>
        : <span key={'star'} id={id} className="material-symbols-rounded text-neutral-100 absolute right-[10px] text-3xl">
            star
        </span>}
        {posterUrl ? <img key={'movieposter'} src={posterUrl} alt="" /> : <Breathing key={'shimmer'} width={200} height={300} />}
    </div>
}