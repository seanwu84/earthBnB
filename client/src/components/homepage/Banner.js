import React from 'react'
import './Banner.css';
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'


function Banner() {
  const history = useHistory();
  return (
    <div className='banner'>

      <div className='banner__info'>
        <h1>
          Go Near
        </h1>
        <h4>
          Settle in somewhere new. Discover stays to live, work, or just relax.
        </h4>
        <Button onClick={() => history.push('/search')} variant='outlined'>Explore nearby</Button>
      </div>
    </div>
  )
}
export default Banner;
