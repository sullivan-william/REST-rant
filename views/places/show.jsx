const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <img src={data.place.pic} alt={data.place.name} style={{ width: '30em', height: '30em' }} />
                <div>
                    <h3>Location</h3>
                    <p>{data.place.city}, {data.place.state}</p>
                </div>
                <div>
                    <h3>Cuisines</h3>
                    <p>{data.place.cuisines}</p>
                </div>
                <div>
                    <h3>Rating</h3>
                    <p>Not Rated</p>
                </div>
                <div>
                    <h2>Comments</h2>
                </div>
                <div>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show