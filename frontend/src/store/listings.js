const SET_LISTINGS = 'listings/all';
const SINGLE_LISTING = 'listings/single';


export function setListings(listings) { 
    return {
        type: SET_LISTINGS,
        listings: listings
    }
}

export function singleListing(listing) {
    return {
        type: SINGLE_LISTING,
        listing: listing
    }
}



export const searchCity = (city, state, days) => {
        return async dispatch => {
            const apiUrl =  `/api/listings`
            const completeUrl = `${apiUrl}?state=${state}&city=${city}&days=${days}`
            const res = await fetch(completeUrl, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
            },
        });
        res.data = await res.json();

        if (res.ok) {
            console.log(res)
            const propertiesRawData = res.data.data.content.properties
            const properties = propertiesRawData.map(x => {
                return {
                    id: x.id,
                    stars: 5,
                    reviews: Math.round(x.days_on_market / 10),
                    type: x.type,
                    name: x.address,
                    city: x.city,
                    price: Math.round(x.list_price / 3333),
                    guests: 5,
                    bedroom: x.beds,
                    bed: x.beds,
                    bath: x.baths,
                    lat: x.latitude,
                    long: x.longitude,
                    image: x.image_url
                }
            })

          dispatch(setListings(properties))
        }
        return res;
    };
};

export default function listingsReducer(state=[], action) {
    switch (action.type) {
        case SET_LISTINGS:
            return action.listings;
        default:
            return state;
    }
}
