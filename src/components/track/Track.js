import React, { useEffect, useState } from "react";
import MusicCard from "./MusicCard";
import axios from "axios";
import banner from "../../assets/banner.png"

function track() {
const[TrackList,setTrackList]=useState([]);
useEffect(()=>{
  getTrack();
},[])
 const getTrack=()=>{
  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/tracks/',
    params: {
      ids: '4WNcduiCmDNfmTEz7JvmLv'
    },
    headers: {
      'X-RapidAPI-Key': 'c53218df60mshec3a002eca5ec4ap1e5cb7jsnc9628c0193c2',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  try {
    axios.request(options).then(response=>{
      setTrackList(response.data.tracks[0])
      console.log(response.data)    })
  } catch (error) {
    console.error(error);
  }
 }
  return (
    <div>
      <h4 className="m-0 p-3 lh-lg text-uppercase fw-normal text-white">
        Track Page
      </h4>
      <div className="card text-bg-dark postion-relative">
        <img
          src={banner}
          className="card-img object-fit-cover blur"
          height={260}
          alt="..."
        />
        <div className="card-img-overlay top-50 bottom-0">
          <div className="row align-items-center">
            <div className="col">
              <h5 className="card-title">{TrackList.name}</h5>
              <h3 className="card-text">On Repeat</h3>
            </div>
            <div className="col text-end px-4">
              <audio controls>
                <source src={TrackList.preview_url} type="audio/mp3"></source>
              </audio>
            </div>
          </div>
        </div>
      </div>
      <MusicCard></MusicCard>
    </div>
  );
}

export default track;
