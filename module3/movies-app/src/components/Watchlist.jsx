import { useState } from "react";


export default function Watchlist({watchlist, setWatchlist, genres}) {
    let [currentFilter,setCurrentFilter] = useState(0);
    let [searchInput, setSearchInput] = useState('');

    let ascArrows = document.querySelectorAll('.asc');
    let descArrows = document.querySelectorAll('.desc');
    let genreFilters = [0];

    if(watchlist){
        
        for(let obj of watchlist){
            obj.genre_ids.forEach((id)=>{
                if(!genreFilters.includes(id)) genreFilters.push(id);
            });
            
        }
    }

    function sortArrowHandler(watchlist,i){
        let ascBlack = 'asc border-b-[6px] border-black border-x-[6px] border-x-transparent h-0 w-0';
        let ascGray = 'asc border-b-[6px] border-gray-400 border-x-[6px] border-x-transparent h-0 w-0';
        let descBlack = 'desc border-t-[6px] border-black border-x-[6px] border-x-transparent h-0 w-0';
        let descGray = 'desc border-t-[6px] border-gray-400 border-x-[6px] border-x-transparent h-0 w-0';

        if(descArrows[i].classList.contains('border-black')){
            watchlist.reverse();
            descArrows[i].className = descGray;
            ascArrows[i].className = ascBlack;
        }
        else{
            descArrows[i].className = descBlack;
            ascArrows[i].className = ascGray;
        }
        
        for(let j=0; j<3; j++){
            if(i != j){
                descArrows[j].className = descGray;
                ascArrows[j].className = ascGray;
            }
        }
    }

    let tableClickHandler = (e) => {
        if(e.target.innerText == 'Delete'){
            watchlist = watchlist.filter(obj=>(obj.id != e.target.id));
            localStorage.setItem('watchlist',JSON.stringify(watchlist));
        }
        else if(e.target.closest('.rating')){
            watchlist.sort((a,b) => a.vote_average - b.vote_average);
            sortArrowHandler(watchlist,1);            
        }
        else if(e.target.closest('.popularity')){
            watchlist.sort((a,b) => a.popularity - b.popularity);
            sortArrowHandler(watchlist,2);
        }
        else if(e.target.closest('.movie')){
            watchlist.sort((a,b) => a.title.localeCompare(b.title));
            sortArrowHandler(watchlist,0);
        }
        setWatchlist([...watchlist]);
    }

    let genreFilterHandler = e => {
        if(e.target.classList.contains('genre-filters')) return;
        setCurrentFilter(e.target.id);
    }

    let searchHandler = e =>{
        setSearchInput(e.target.value.toLowerCase());
    }

    
    return <>
        <div className="w-full text-center">
            <div className="genre-filters mt-[15px] flex justify-center gap-[10px] font-bold text-gray-700 px-[10%] py-[10px] flex-wrap" onClick={genreFilterHandler}>
                {
                    genreFilters.map((id) => {
                        if(currentFilter == id) return <span key={id} id={id} className="px-[20px] py-[5px] cursor-pointer rounded-3xl bg-neutral-700 text-neutral-200 whitespace-nowrap" >{genres[id]}</span>
                        return <span key={id} id={id} className="bg-blue-200 px-[20px] py-[5px] cursor-pointer rounded-3xl hover:bg-neutral-700 hover:text-neutral-200 whitespace-nowrap" >{genres[id]}</span>
                    })
                }
            </div>
            <input type="text" onChange={searchHandler} className="search mt-[15px] outline-none bg-gray-100 w-[300px] h-[40px] rounded-lg p-[5px] text-center text-[20px] border-[2px]" placeholder="Search Movies" />
        </div>
        <div className="min-w-[960px] overflow-x-auto overflow-hidden rounded-lg shadow-md border border-gray-200 m-8" onClick={tableClickHandler} >
            <table className="w-full text-center">
                <thead className="bg-gray-50 text-gray-900 border-b-2">
                    <tr>
                        <th className="movie">
                            <div className="p-2 flex items-center cursor-pointer">
                                Movie
                                <span className="flex flex-row flex-wrap h-full w-[10px] gap-[3px] mx-[8px]">
                                    <span className="asc border-b-[6px] border-gray-400 border-x-[6px] border-x-transparent h-0 w-0"></span>
                                    <span className="desc border-t-[6px] border-gray-400 border-x-[6px] border-x-transparent h-0 w-0"></span>
                                </span>
                            </div>
                        </th>
                        <th className="rating">
                            <div className="p-2 flex items-center justify-center cursor-pointer">
                                Rating
                                <span className="flex flex-row flex-wrap h-full w-[10px] gap-[3px] mx-[8px]">
                                    <span className="asc border-b-[6px] border-gray-400 border-x-[6px] border-x-transparent h-0 w-0"></span>
                                    <span className="desc border-t-[6px] border-gray-400 border-x-[6px] border-x-transparent h-0 w-0"></span>
                                </span>
                            </div>
                        </th>
                        <th className="popularity">
                            <div className="p-2 flex items-center justify-center cursor-pointer">
                                Popularity
                                <span className="flex flex-row flex-wrap h-full w-[10px] gap-[3px] mx-[8px]">
                                    <span className="asc border-b-[6px] border-gray-400 border-x-[6px] border-x-transparent h-0 w-0"></span>
                                    <span className="desc border-t-[6px] border-gray-400 border-x-[6px] border-x-transparent h-0 w-0"></span>
                                </span>
                            </div>
                        </th>
                        <th>Genre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="text-xl text-neutral-600 ">
                    {
                        watchlist.length ? watchlist.map((movieObj) => {
                            if(!movieObj.id) return;
                            if(searchInput && !movieObj.title.toLowerCase().includes(searchInput)) return;
                            if(currentFilter != 0 && !movieObj.genre_ids.includes(Number(currentFilter))) return;
                            return <tr key={(movieObj.id*10)+1} className="border-b-2 last:border-0">
                                <td className="flex items-center gap-[20px] text-left py-[5px] px-[5px]">
                                    <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w185${movieObj.backdrop_path}`} alt="" />
                                    <span className="w-[20vw]">{movieObj.title}</span>
                                </td>
                                <td>{movieObj.vote_average}</td>
                                <td>{Math.round(movieObj.popularity)}</td>
                                <td>{movieObj.genre_ids.map((genre) => {
                                    return <p key={genre+'-'+movieObj.id}>{genres[genre]}</p>
                                })}</td>
                                <td id={movieObj.id} className="text-red-600 cursor-pointer">Delete</td>
                            </tr>
                        }) : null
                    }
                </tbody>
            </table>
        </div>
    </>

}