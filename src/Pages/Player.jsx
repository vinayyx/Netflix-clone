import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import back from "../assets/back_arrow_icon.png";

function Player() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [apidata, setApidata] = useState({ key: "" });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWU0MmZkODA2MjEwZTJlYWIyM2M0NDBmMTQ3YTU4NyIsIm5iZiI6MTc1MTE4MzUxOC40OTUwMDAxLCJzdWIiOiI2ODYwZjA5ZTJiY2JiMDAwNmMzMDNkMTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IaHIU4WoKlxEhj41rmkiwr_BY56kQ-Dbf1UrGHPEOMU'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results.length > 0) {
          setApidata(res.results[0]);
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-black relative px-4 pt-20 pb-10'>

      {/* Back Button */}
      <img
        src={back}
        alt="Back"
        className='absolute top-5 left-5 sm:top-8 sm:left-8 w-8 sm:w-10 cursor-pointer z-10'
        onClick={() => navigate('/home')}
      />

      {/* Responsive Video Frame */}
      <div className='w-full max-w-6xl aspect-video rounded-lg overflow-hidden shadow-xl'>
        {apidata.key ? (
          <iframe
            className='w-full h-full'
            src={`https://www.youtube.com/embed/${apidata.key}`}
            allowFullScreen
            title="Movie Trailer"
            frameBorder="0"
          />
        ) : (
          <div className='text-white text-center w-full h-full flex items-center justify-center bg-gray-800'>
            Loading video...
          </div>
        )}
      </div>
    </div>
  );
}

export default Player;
