import React, { useEffect, useState } from "react";
import Img from "../../assets/img.jpg";
import axios from "axios";

function playlist() {
  const [getPlayList, setPlayList] = useState([]);
  useEffect(() => {
    getPlaylist();
  }, [])
  const getPlaylist = () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
      params: {
        id: '37i9dQZF1DX4Wsb4d7NKfP',
        offset: '0',
        limit: '100'
      },
      headers: {
        'X-RapidAPI-Key': 'c53218df60mshec3a002eca5ec4ap1e5cb7jsnc9628c0193c2',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      axios.request(options).then(response => {
        setPlayList(response.data.items)
        // console.log(response.data.items);
      });
    } catch (error) {
      console.error(error);
    }

  }
  return (
    <div className="col">
      <div className="row">
        <div className="card text-bg-dark">
          <img src={Img} className="card-img blur" height={280} alt="..." />
          <div className="card-img-overlay top-50 mx-5">
            <h5 className="card-title">On Top</h5>
            <h5 className="card-text">Of The World</h5>
            <button type="button" className="btn btn-primary mx-1">
              Play
            </button>
            <button type="button" className="btn btn-primary">
              Pause
            </button>
          </div>
        </div>
      </div>
      <div className="my-5">
        <ul className="list-group">
          {getPlayList.map((item) => {
            if (item.track == null) {
              //
            }
            else {
              return (
                <li key={item.track.external_ids.isrc} className="list-group-item m-3 rounded-3 bg-transparent border-0 text-white ">
                  <div className="row">
                    <div className="col">{item.track.name}</div>
                    <div className="col text-end">
                      
                    <audio controls>
                <source src={item.track.preview_url} type="audio/mp3"></source>
              </audio></div>
                  </div>
                </li>
              )
            }
          }
          )}
        </ul>
      </div>
    </div>
  );
}

export default playlist;
