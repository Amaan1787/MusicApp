import React, { useEffect, useState } from "react";
import podcastimg from "../../assets/radio-img.jpg";
import axios from "axios";

function Podcast() {
  const [Radiolist, setradio] = useState([]);
  useEffect(() => {
    Radio();
  }, [])
  const Radio = () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/podcast_episodes/',
      params: {
        id: '0ofXAdFIQQRsCYj9754UFx',
        offset: '0',
        limit: '50'
      },
      headers: {
        'X-RapidAPI-Key': 'c53218df60mshec3a002eca5ec4ap1e5cb7jsnc9628c0193c2',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      axios.request(options).then(response => {
        setradio(response.data.data.podcastUnionV2.episodesV2.items)
      })
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="col">
      <div className="row">
        <h1 className="text-white text-center lh-lg">listen podcast</h1>
        <p className="text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g5 justify-content-space-evenly">
        {Radiolist.map((i) => {
          return (
            <div className="col" key={i.uid}>
              <div className="card h-100">
                <img src={podcastimg} className="card-img-top" alt="..." />
                <div className="card-body p-1">
                  <h5 className="card-title m-0 p-1">{i.entity.data.name}</h5>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Podcast;
