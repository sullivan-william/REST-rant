const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1 id='home-h1'>REST-<br></br>rant</h1>
                <br></br>
                <div>
                    <img src='/images/tacos.jpg' alt='tacos' style={{ width: '80vw', height: 'auto' }} />
                    <div>
                        Photo by <a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Montano</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <br></br>
                <a href='/places' className='large'>
                    <button className="teal-btn">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home