const React = require('react')
const Def = require('../default')

function show(data) {

    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )

    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )

    if (data.place.comments.length) {

        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐️'
        }
        rating = (
            <h3>
                {stars}
            </h3>
        )

        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form method='POST' action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                        <input type='submit' className='red-btn' value='Delete Comment' />
                    </form>
                </div>
            )
        })
    }

    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                {rating}
                <br></br>
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
                        <input type='number' max='5' min='0' id='stars' name='stars' required></input>
                    </div>
                    <button type='submit' className='teal-btn'>Comment</button>
                </form>
                <br></br>
                <div className='flex'>
                    <a href={`/places/${data.place.id}/edit`} className="tertiary-btn">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                        <button type="submit" className="red-btn">
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </Def >
    )
}

module.exports = show