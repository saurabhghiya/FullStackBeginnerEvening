

export default function Watchlist() {
    let movies = [
        {
            adult: false,
            backdrop_path: "/ogFIG0fNXEYRQKrpnoRJcXQNX9n.jpg",
            id: 619930,
            title: "Narvik",
            original_language: "no",
            original_title: "Kampen om Narvik",
            overview:
                "April, 1940. The eyes of the world are on Narvik, a small town in northern Norway, a source of the iron ore needed for Hitler's war machine. Through two months of fierce winter warfare, the German leader is dealt with his first defeat.",
            poster_path: "/gU4mmINWUF294Wzi8mqRvi6peMe.jpg",
            media_type: "movie",
            genre_ids: [10752, 18, 36, 28],
            popularity: 321.063,
            release_date: "2022-12-25",
            video: true,
            vote_average: 7.406,
            vote_count: 53,
        },
        {
            adult: false,
            backdrop_path: "/6RCf9jzKxyjblYV4CseayK6bcJo.jpg",
            id: 804095,
            title: "The Fabelmans",
            original_language: "en",
            original_title: "The Fabelmans",
            overview:
                "Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",
            poster_path: "/d2IywyOPS78vEnJvwVqkVRTiNC1.jpg",
            media_type: "movie",
            genre_ids: [18],
            popularity: 163.3,
            release_date: "2022-11-11",
            video: false,
            vote_average: 8.02,
            vote_count: 561,
        },
        {
            adult: false,
            backdrop_path: "/fTLMsF3IVLMcpNqIqJRweGvVwtX.jpg",
            id: 1035806,
            title: "Detective Knight: Independence",
            original_language: "en",
            original_title: "Detective Knight: Independence",
            overview:
                "Detective James Knight 's last-minute assignment to the Independence Day shift turns into a race to stop an unbalanced ambulance EMT from imperiling the city's festivities. The misguided vigilante, playing cop with a stolen gun and uniform, has a bank vault full of reasons to put on his own fireworks show... one that will strike dangerously close to Knight's home.",
            poster_path: "/jrPKVQGjc3YZXm07OYMriIB47HM.jpg",
            media_type: "movie",
            genre_ids: [28, 53, 80],
            popularity: 119.407,
            release_date: "2023-01-20",
            video: false,
            vote_average: 6.6,
            vote_count: 10,
        },
        {
            adult: false,
            backdrop_path: "/e782pDRAlu4BG0ahd777n8zfPzZ.jpg",
            id: 555604,
            title: "Guillermo del Toro's Pinocchio",
            original_language: "en",
            original_title: "Guillermo del Toro's Pinocchio",
            overview:
                "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
            poster_path: "/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
            media_type: "movie",
            genre_ids: [16, 14, 18],
            popularity: 754.642,
            release_date: "2022-11-18",
            video: false,
            vote_average: 8.354,
            vote_count: 1694,
        },
    ];

    return <>
        <div className="w-full text-center">
            <div className="genres mt-[15px] flex justify-center gap-[10px] font-bold text-gray-700 p-[10px]">
                <span className="bg-blue-200 px-[20px] py-[5px] cursor-pointer rounded-3xl" >All Genres</span>
                <span className="bg-blue-200 px-[20px] py-[5px] cursor-pointer rounded-3xl" >Action</span>
                <span className="bg-blue-200 px-[20px] py-[5px] cursor-pointer rounded-3xl" >Sci-Fi</span>
            </div>
            <input type="text" className="search mt-[15px] outline-none bg-gray-100 w-[300px] h-[40px] rounded-lg p-[5px] text-center text-[20px] border-[2px]" placeholder="Search Movies" />
        </div>
        <div className="min-w-[960px] overflow-x-auto overflow-hidden rounded-lg shadow-md border border-gray-200 m-8" >
            <table className="w-full text-center">
                <thead className="bg-gray-50 text-gray-900 border-b-2">
                    <tr>
                        <th className="px-2 text-left">Name</th>
                        <th className="p-2 flex items-center justify-center">
                            <span className="flex flex-row flex-wrap h-full w-[10px] gap-[3px] mx-[8px]">
                                <span class="asc border-b-[6px] border-gray-500 border-x-[6px] border-x-transparent  h-0 w-0"></span>
                                <span class="desc border-t-[6px] border-gray-500 border-x-[6px] border-x-transparent  h-0 w-0"></span>
                            </span>
                            <span>Rating</span>
                        </th>
                        <th>Popularity</th>
                        <th>Genre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="text-xl text-neutral-600 ">
                    {
                        movies.map((movieObj) => {
                            return <tr className="border-b-2 last:border-0">
                                <td className="flex items-center gap-[20px] text-left py-[5px] px-[5px]">
                                    <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w185${movieObj.backdrop_path}`} alt="" />
                                    <span className="w-[20vw]">{movieObj.title}</span>
                                </td>
                                <td>{movieObj.vote_average}</td>
                                <td>{movieObj.popularity}</td>
                                <td>{movieObj.media_type}</td>
                                <td className="text-red-600 cursor-pointer">Delete</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>;
    </>

}