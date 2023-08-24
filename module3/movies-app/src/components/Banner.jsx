import { useEffect, useState } from "react";
import axios from 'axios';
import SliderImage from "./SliderImage";

export default function Banner(){
    const sliderurl = `https://api.themoviedb.org/3/movie/upcoming?api_key=282d714dac35bcf54b6e189688151c62`;
    const imageContainer = document.querySelector('.image-container');
    
    let [data,setData] = useState([]);
    let [index, setIndex] = useState(0);

    useEffect(()=>{
        axios.get(sliderurl).then(res => {
            setData(res.data.results);            
        });
    },[])
    data.length = data.length ? 4 : data.length;
    let n = data.length;

    function arrowClickHandler(e){
        if(e.target.innerText == 'arrow_forward_ios'){
            let i = (index+1)<4 ? index+1 : index;
            setIndex(i);
        }
        else if(e.target.innerText == 'arrow_back_ios'){
            let i = (index-1)>=0 ? index-1 : index;
            setIndex(i);
        }
    }
    if(imageContainer) imageContainer.className = `image-container h-full w-[400%] absolute flex transition-transform duration-500 translate-${index}`;

    return <div className="banner w-full h-[80vh] relative flex items-center overflow-hidden" >

        <div className={`image-container h-full w-[400%] absolute flex transition-transform duration-500`}>
            {
                n ? data.map((obj)=>{
                    return <SliderImage key={obj.id} className="h-full w-full bg-cover bg-no-repeat bg-top bg-origin-content"
                    imageUrl = {`url(${n ? `https://image.tmdb.org/t/p/original${obj.backdrop_path}` : ``})`} />
                }) : ''
            }
        </div>

        <div className="w-full text-neutral-200 flex justify-between z-[1]" onClick={arrowClickHandler}>
            <span className="material-symbols-rounded p-[10px] text-5xl cursor-pointer">
                arrow_back_ios
            </span>
            <span className="material-symbols-rounded p-[10px] text-5xl cursor-pointer">
                arrow_forward_ios
            </span>
        </div>
        <div className="bannertext w-full text-neutral-200 bg-black/50 text-[40px] py-[10px] text-center absolute bottom-0">
            {n ? data[index].title : ``}
        </div>
        
    </div>
}