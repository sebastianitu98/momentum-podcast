import React from 'react'
import './LatestEpisodes.css'
import EpisodeComponent from './EpisodeComponent/EpisodeComponent'

function LatestEpisodes() {

    const episodes = [
        {
            title: 'Tu iti faci patul de dimineata?',
            youtubeLink: 'https://www.youtube.com/watch?v=hF6IcInVlGs&t=136s',
            spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd#login',
        },
    ]

    return (
        <div className='latestEpisodes mx-auto text-center pb-10 w-full items-center text-center' id='latest_episodes'>
            <h2 className='mx-auto' id='latestEpisodesTitle'>Latest episode</h2>

            <div className="latestEpisodesMap flex mx-auto items-center justify-center">
                {episodes.map((element, index) => <EpisodeComponent key={index} episodeData={element} />)}
            </div>
        </div>
    )
}

export default LatestEpisodes