const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <img src={data.place.pic} alt={data.place.name} style={{ width: '30em', height: '30em' }} />
                <div>
                    <h2>Description</h2>
                    <h3>{data.place.showEstablished()}</h3>
                </div>
                <div>
                    <h2>Cuisines</h2>
                    <h3>{data.place.cuisines}</h3>
                </div>
                <div>
                    <h2>Rating</h2>
                    <p>Not Rated</p>
                </div>
                <div>
                    <h2>Comments</h2>
                </div>
                <div>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
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