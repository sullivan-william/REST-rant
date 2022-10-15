const React = require('react')
const Def = require('../default')

function show(data) {

    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )

    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }

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
                    {comments}
                </div>
                <br></br>
                <h2>Add your own rating?</h2>
                <form method='POST' action={`/places/${data.place.id}/comment`}>
                    <div className='form-group'>
                        <label htmlFor='content'>Content</label>
                        <textarea className='form-control' id='content' name='content'></textarea>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='author'>Author</label>
                        <input className='form-control' id='author' name='author'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='stars'>Rating</label>
                        <input type='number' max='5' min='0' id='stars' name='stars'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='rant'>Rant?</label>
                        <input type='checkbox' id='rant' name='rant'></input>
                    </div>
                    <button type='submit' className='btn btn-primary'>Comment</button>
                </form>
                <br></br>
                <div>
                    <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </Def >
    )
}

module.exports = show