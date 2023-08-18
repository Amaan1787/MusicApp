import React, { useEffect, useState } from "react";
import albumbimg from '../../assets/albumb-1.jpg'
import axios from "axios";

function album() {
  const [AlbumList, setAlbum] = useState([]);
  useEffect(() => {
    getAlbum();
  }, [])
  const getAlbum = () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/album_tracks/',
      params: {
        id: '3IBcauSj5M2A6lTeffJzdv',
        offset: '0',
        limit: '300'
      },
      headers: {
        'X-RapidAPI-Key': 'c53218df60mshec3a002eca5ec4ap1e5cb7jsnc9628c0193c2',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      axios.request(options).then(response => {
        setAlbum(response.data.data.album.tracks.items)
        // console.log(response.data.items);
      });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="container-fluid">
      <h1 className="text-white">Album Page</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g5">
        {AlbumList.map((i) => {
          return (
            <div className="col" key={i.uid}>
              <div className="card" style={{ 'width': '18rem' }}>
                <img src={albumbimg} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{i.track.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          ) 
        })}
      </div>
    </div>
  );
}

export default album;
