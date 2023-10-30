import React from 'react'
import './EpisodeComponent.css'

function EpisodeComponent({ episodeData }) {
    return (
        <div className='episodeElement mx-6 flex flex-col justify-between'>
            {episodeData && <img src={`${episodeData.image}`} alt="IMG" className='mb-4' />}

            {episodeData && <p className='episode-title text-white'> {episodeData.title} </p>}

            <div className="episodeElementLinks flex mt-2">

                {episodeData &&
                    <a href={`${episodeData.youtubeLink}`} target="_blank">
                        <img src={'youtube-logo-2431 (1).png'} alt="IMG" />
                    </a>
                }

                {episodeData &&
                    <a href={`${episodeData.spotifyLink}`} target="_blank">
                        <img src={'spotify-logo-5434 (1).png'} alt="IMG" />
                    </a>
                }

            </div>

        </div>

    )
}

export default EpisodeComponent