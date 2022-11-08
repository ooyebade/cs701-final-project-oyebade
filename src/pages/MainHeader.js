import React, { Component } from 'react';
import cardheader from '../assets/images/cardheader.gif';


// creating a header component which will extend the component
class Header extends Component {
    render() {
        return (
            <div className='headerComponent'>

                <h2 className='positionRelative'>Naija BlackJack! <span>&#127475;&#127468;</span></h2>

                {/* displaying the header image */}
                <img src={cardheader} alt='CardHeader' />

            </div>
        );
    }
}

export default Header