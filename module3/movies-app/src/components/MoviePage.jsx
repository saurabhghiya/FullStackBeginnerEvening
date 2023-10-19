import { useEffect, useState } from "react"
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function MoviePage() {
    let [videoURL, setVideoURL] = useState('');
    let [movieData, setMovieData] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    let {movieId} = useParams();


    useEffect(() => {
        let url = '';
        const videoOptions = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODJkNzE0ZGFjMzViY2Y1NGI2ZTE4OTY4ODE1MWM2MiIsInN1YiI6IjY0YjJjMTdkNzg1NzBlMDEwMDg4ZDBlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9xgEPmfq4ts8hDxnrY16ReG-f7aYc_R4t55bNk5wBFU'
            }
        };

        axios.request(videoOptions)
            .then(function (response) {
                let trailers = response.data.results.filter((obj) => obj.type == 'Trailer');
                setVideoURL(`https://www.youtube.com/embed/${trailers[0].key}`);
            })
            .catch(function (error) {
                console.error(error);
            });


        const movieOptions = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${movieId}`,
            params: { language: 'en-US' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODJkNzE0ZGFjMzViY2Y1NGI2ZTE4OTY4ODE1MWM2MiIsInN1YiI6IjY0YjJjMTdkNzg1NzBlMDEwMDg4ZDBlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9xgEPmfq4ts8hDxnrY16ReG-f7aYc_R4t55bNk5wBFU'
            }
        };

        axios
            .request(movieOptions)
            .then(function (response) {
                setMovieData(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });

    }, []);

    if(!movieData) return; 
    return (
        <div className="moviepage relative mt-[10px] py-[40px] flex flex-col items-center" >
            <span key={2} onClick={() => navigate(-1)} className="prev select-none material-symbols-rounded bg-neutral-200 h-fit cursor-pointer py-[10px] rounded-[50%] min-w-[40px] px-[10px] absolute left-[10px] top-0">
                arrow_back_ios_new
            </span>
            <div className="max-w-[80%]">
                <p className="title font-bold text-7xl pb-[10px]">{movieData.title}</p>
                <p className="title font-medium italic text-neutral-500 text-xl m-[5px] indent-[5px] border-l-red-700 border-l-4">{
                    movieData.genres.map((g,i)=>{
                        if(i == 0) return `${g.name}`;
                        return `, ${g.name}`;
                    })
                }</p>
                
                <div className="media flex gap-[10px] mt-[10px] h-[30vw] min-h-[130px]">

                    <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt={movieData.title}/>
                    <iframe src={videoURL} className="aspect-video" allowFullScreen>
                    </iframe>
                </div>
                
                <div className="moviedetails mt-[40px]">
                    <p className="overview-heading font-medium italic text-neutral-500 text-2xl m-[5px] indent-[5px] border-l-red-700 border-l-4">Overview</p>
                    <p className="overview-para text-lg mt-[10px] text-justify">{movieData.overview}</p>
                    <br />
                    <p className="overview-heading font-medium italic text-neutral-500 text-2xl m-[5px] indent-[5px] border-l-red-700 border-l-4">Movie Info</p>
                    <p className="overview-para text-lg mt-[10px] text-justify">
                        <strong>Rating: </strong> {movieData.vote_average.toFixed(1)}/10
                        <br />
                        <strong>Release Date: </strong> {movieData.release_date}
                        <br />
                        <strong>Tagline: </strong> {movieData.tagline}
                        <br />
                        <strong>Official Website: </strong> {movieData.homepage}
                        <br />
                        <strong>Production Companies: </strong> {movieData.production_companies.map((company,i)=> i?`, ${company.name}`:company.name)}
                    </p>
                </div>
                

            </div>
            
        </div>
    )

}