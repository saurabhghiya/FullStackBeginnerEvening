import MovieCard from "./MovieCard";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "./Pagination";
import Filters from "./Filters";

export default function Movies(){
    let [data,setData] = useState({});
    let [pageNo, setPageNo] = useState(1);
    let [filterIndex,setFilterIndex] = useState(0);
    let [watchlist, setWatchlist] = useState([]);
    
    let dummy = {};
    dummy.results = new Array(20);
    dummy.results.fill({});

    let filterText = ['Trending', 'Popular', 'Top Rated', 'Now Playing', 'Upcoming'];
    let filterValues = ['trending/movie/week','movie/popular','movie/top_rated','movie/now_playing','movie/upcoming'];
    const activeClass = ['bg-neutral-800', 'text-neutral-200'];
    const yellow = 'text-yellow-400';

    const url = `https://api.themoviedb.org/3/${filterValues[filterIndex]}?api_key=282d714dac35bcf54b6e189688151c62&page=${pageNo}`;    

    useEffect(()=> {
        setData(dummy);
        // setTimeout(()=> {
            axios.get(url).then(res => {
                setData(res.data);
                // console.log(url);
            });
        // }, 500)
    },[pageNo,filterIndex])

    useEffect(()=>{
        const trending = document.querySelector('.filters').firstElementChild;
        trending.classList.add(...activeClass);
        
        let jsonstring = localStorage.getItem('watchlist');
        setWatchlist(JSON.parse(jsonstring));
        // console.log(watchlist);
        // for(let i=0; i<watchlistStored.length; i++){
        //     console.log(document.getElementById(watchlistStored[i]));
        // }
    },[])

    function clickHandler(e){
        const parent = e.target.parentNode;
        if(e.target.dataset.topage) setPageNo(Number(e.target.dataset.topage));
        else if(parent.classList.contains('filters')) {
            const filterNodes = parent.children;
            for(let i=0; i<filterNodes.length; i++){
                filterNodes[i].classList.remove(...activeClass);
            }
            e.target.classList.add(...activeClass);
            setFilterIndex(filterText.indexOf(e.target.innerText));
        }
        else if(e.target.innerText == 'star'){
            let id = Number(e.target.id);
            let newWatchlist = [];

            if(!watchlist.includes(id)){
                newWatchlist = [...watchlist,id];
            }
            else{
                newWatchlist = watchlist.filter((n) => {
                    return (n != id);
                });
            }
            localStorage.setItem('watchlist',JSON.stringify(newWatchlist));
            
            setWatchlist(newWatchlist);
        }
        
    }

    // console.log(watchlist);
    
    return <div className="movies mt-[10px] w-full" onClick={clickHandler}>
        <div key={'filters'} className="filters text-center py-[10px] flex justify-center gap-[10px]">
            {
                filterText.map((text) => {
                    return <Filters key={text} filterText={text}/>
                })
            }
        </div>
        <div key={'movielist'} className="movielist w-full max-w-[1120px] flex flex-wrap gap-[20px] px-[20px] mx-auto mt-[10px] justify-center">
            { data.results ? data.results.map((item) => {
                return <MovieCard key={item.id} id={item.id} watchlist = {watchlist} posterUrl={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : ''} />
            }) : null }
        </div>
        <Pagination key={'pagination'} pageNo={pageNo}/>
    </div>;
}
