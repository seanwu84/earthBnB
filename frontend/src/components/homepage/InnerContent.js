import React from 'react';
import Banner from './Banner';
import './homepage.css';
import Card from './Card'
import uniquestay from '../photos/uniquestay.jpg'
import onlineexperience from '../photos/onlineexperience.jpg'
import entirehome from '../photos/entirehomes.jpg'
import house1 from '../photos/house1.png'
import room1 from '../photos/room1.png'
import view1 from '../photos/view1.png'

function InnerContent() {
  return (
    <div className="inner_content">
      <Banner />
      <div className='home__section'>
        <Card
          src={uniquestay}
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src={onlineexperience}
          title="Online Experience"
          description="A new way to travel from home."
        />
        <Card
          src={entirehome}
          title="Entire homes"
          description="Comfortable private place, with rooms for friends and family."
        />
      </div>
      <div className='home__section home-second__section'>
        <Card
          src={house1}
          title="Luxury Estate in San Jose"
          description="Superhost with all the amenities you will ever need."
          price="$199/night"
        />
        <Card
          src={room1}
          title="Master bedroom in St. Nives"
          description="Indulge in the luxury of St. Nives finest."
          price="$100/night"
        />
        <Card
          src={view1}
          title="Montain top home in San Juan"
          description="Wakeup to a breathtaking view of the tropics."
          price="$150/night"
        />
      </div> 
    </div>
  )
}

export default InnerContent
