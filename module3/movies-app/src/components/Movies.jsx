import MovieCard from "./MovieCard";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "./Pagination";
import Filters from "./Filters";
import Banner from "./Banner";
import { Link, useNavigate } from "react-router-dom";

export default function Movies({ pageNo, setPageNo, watchlist, setWatchlist, data, setData, movieId, setMovieId }) {

    const navigate = useNavigate();
    let [filterIndex, setFilterIndex] = useState(0);
    let filterText = ['Trending', 'Popular', 'Top Rated', 'Now Playing', 'Upcoming'];
    let filterValues = ['trending/movie/week', 'movie/popular', 'movie/top_rated', 'movie/now_playing', 'movie/upcoming'];
    const activeClass = ['bg-neutral-800', 'text-neutral-200'];

    const url = `https://api.themoviedb.org/3/${filterValues[filterIndex]}?api_key=282d714dac35bcf54b6e189688151c62&page=${pageNo}`;

    useEffect(() => {
        // setTimeout(()=> {
        axios.get(url).then(res => {
            setData(res.data);
        });
        // }, 500)
    }, [pageNo, filterIndex])

    useEffect(() => {
        const trending = document.querySelector('.filters').firstElementChild;
        trending.classList.add(...activeClass);

        // let jsonstring = localStorage.getItem('watchlist');
        // setWatchlist(JSON.parse(jsonstring));
    }, [])

    function clickHandler(e) {
        const parent = e.target.parentNode;
        if (e.target.dataset.topage) setPageNo(Number(e.target.dataset.topage));
        else if (parent.classList.contains('filters')) {
            const filterNodes = parent.children;
            for (let i = 0; i < filterNodes.length; i++) {
                filterNodes[i].classList.remove(...activeClass);
            }
            e.target.classList.add(...activeClass);
            setFilterIndex(filterText.indexOf(e.target.innerText));
        }
        else if (e.target.innerText === 'star') {
            let id = Number(e.target.id);
            let newWatchlist = [];
            let checkId = watchlist ? watchlist.reduce((ans, obj) => {
                return (obj.id === id) | ans;
            }, false) : false;

            if (!checkId) {
                newWatchlist = data.results.filter((obj) => {
                    return (obj.id === id);
                });
                newWatchlist = [...watchlist, ...newWatchlist];
            }
            else {
                newWatchlist = watchlist.filter((obj) => {
                    return (obj.id !== id);
                });
            }
            localStorage.setItem('watchlist', JSON.stringify(newWatchlist));

            setWatchlist(newWatchlist);
        }
        else if(e.target.classList.contains('movieposter')){
            navigate('/moviepage/'+e.target.id);
            // console.log(e.target.id);
        }
    }

    let key = 0;
    return <>

    <Banner />
    <div className="movies mt-[10px] w-full" onClick={clickHandler}>
        <div key={'filters'} className="filters text-center py-[10px] flex justify-center gap-[10px]">
            {
                filterText.map((text) => {
                    return <Filters key={text} filterText={text} />
                })
            }
        </div>
        <div key={'movielist'} className="movielist w-full max-w-[1120px] flex flex-wrap gap-[20px] px-[20px] mx-auto mt-[10px] justify-center">
            {data.results ? data.results.map((item) => {
                return (
                    // <Link to="/moviepage" state={{movieId:item.id}} key={item.id | key++}>
                        <MovieCard 
                            key={item.id | key++} 
                            id={item.id} 
                            isWatchlist={watchlist ? watchlist.reduce((ans, obj) => { 
                                return (obj.id == item.id) | ans 
                            }, false) : watchlist} 
                            posterUrl={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : ''} 
                        />
                    // </Link>
                )
            }) : null}
        </div>
        <Pagination key={'pagination'} pageNo={pageNo} />
    </div>
    </>
    
}
