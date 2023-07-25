import { useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(){    

    return <div className="navbar h-[80px] flex items-center gap-[5px] p-[10px] text-2xl text-blue-600 border-b-[1px] border-black-50 font-bold">
        <img className='w-fit h-full' src="movie-icon.png" alt="" />
        <Link id='movies' className='px-[20px] h-full hover:bg-blue-50 target:bg-blue-50 flex items-center' to={'/'}>Movies</Link> 
        <Link id='watchlist' className='px-[20px] h-full hover:bg-blue-50 target:bg-blue-50 flex items-center' to={'/watchlist'}>Watchlist</Link> 
    </div>;
}