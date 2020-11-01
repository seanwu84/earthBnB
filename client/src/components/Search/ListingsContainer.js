import React, { Component } from 'react';
import Listing from './Listing';
import './listings.css';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { setListings } from '../../store/listings';



class ListingsContainer extends Component {
    
    
    render(){
        const notLoaded = this.props.listings && this.props.listings.length > 0;

        return (
            <>
            {notLoaded ?
                <div className="listings-container">
                    <div className="listings">
                        {this.props.listings.map((listing) => <Listing listing={listing} key={listing.id} />)}
                    </div>
                </div>: 'Searching...'}
            </>
            )
    }
}

function mapReduxStateToProps(reduxState){
    return {
        listings: reduxState.listings
    }
}

export default connect(mapReduxStateToProps)(ListingsContainer);