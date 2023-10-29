import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import FormComponent from './Components/Form/FormComponent'
import LatestEpisodes from './Components/LatestEpisodes/LatestEpisodes'
import UpcomingEvents from './Components/UpcomingEvents/UpcomingEvents'
import CopyrightFooter from './Components/CopyrightFooter/CopyrightFooter'
// import ReteleSocializare from './Components/ReteleSocializare/ReteleSocializare'


function App() {

  return (
    <div className='app flex flex-col relative mx-auto'>

      <Navbar />

      <FormComponent />

      <LatestEpisodes />

      <UpcomingEvents />

      {/* <ReteleSocializare /> */}

      <CopyrightFooter />

    </div>
  )
}

export default App