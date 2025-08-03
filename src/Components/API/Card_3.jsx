import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Card_3() {
    const [apidata, setApidata] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWU0MmZkODA2MjEwZTJlYWIyM2M0NDBmMTQ3YTU4NyIsIm5iZiI6MTc1MTE4MzUxOC40OTUwMDAxLCJzdWIiOiI2ODYwZjA5ZTJiY2JiMDAwNmMzMDNkMTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IaHIU4WoKlxEhj41rmkiwr_BY56kQ-Dbf1UrGHPEOMU',
        },
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then((res) => res.json())
            .then((res) => setApidata(res.results))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="w-full px-4 flex flex-col items-start mt-10 overflow-x-auto scrollbar-hide relative">
            <h1 className="text-4xl font-bold text-white mb-6">Top Rated</h1>

            <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-2">
                {apidata.map((card, index) => (
                    <Link
                        to={`/player/${card.id}`}
                        key={index}
                        className="shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]"
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                            alt={card.original_title}
                            className="rounded-lg w-full h-[210px] sm:h-[230px] md:h-[250px] object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <p className="mt-2 text-white font-semibold text-xs sm:text-sm line-clamp-1">
                            {card.original_title}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Card_3;
