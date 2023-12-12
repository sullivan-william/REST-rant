const React = require('react')
const Def = require('../default')

function index (data) {
    
    let placesFormatted = data.places.map((place) => {
        return (
            <div className='col-sm-6'>
                <h2>
                    <a href={`/places/${place.id}`}>
                        {place.name}
                    </a>
                </h2>
                <p>
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} style={{width: '30em', height: '30em'}}/>
                <p>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })

    return (
        <Def>
            <main>
                <h1 className='large'>Places to Rant or Rave About</h1>
                <br></br>
                <div className='row' id='index-main'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index