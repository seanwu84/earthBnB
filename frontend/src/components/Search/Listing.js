import React from 'react';
import './listings.css';
import { Link } from 'react-router-dom';
import StarIcon from "@material-ui/icons/Star";

const Listing = (props) => {
    let amenitiesArr = props.listing.amenities || ['Ask the owner about available amenities']
    let amen = ''
    for (let i = 0; i < amenitiesArr.length; i++) {
        amen += `${amenitiesArr[i]}, `
    }
    const amenities = amen.slice(0, -2)

    const total = props.listing.price * 3;

    const handleClick = () => { }

    return (
        <div class="listing-size" onClick={handleClick}>
            <Link style={{ textDecoration: "none", color: "black" }} to={`listing/${props.listing.id}`}>
                <div class="listing">
                    <img src={props.listing.image} />
                    <div class="listing-information">
                        <div class="listing-information-header">
                            <h3>{props.listing.type} in {props.listing.city}</h3>
                            <h2>{props.listing.name}</h2>
                        </div>
                        <div className="spacer-div"></div>
                        <h3>{props.listing.guests} guests {props.listing.bedroom} bedrooms {props.listing.bed} bed {props.listing.bath} baths </h3>
                        <h3>{amenities}</h3>
                        <div className="listing-information-body">
                            <div className="star">
                                <p><StarIcon className="airbnb_star" />{props.listing.stars} ({props.listing.reviews})</p>
                            </div>
                            <div className="price">
                                <h2>${props.listing.price} / day</h2>
                                <h3>${total} total</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Listing;

