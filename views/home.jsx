const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-rant</h1>
                <div>
                    <img src='/images/tacos.jpg' alt='tacos' style={{width: '30em', height: '30em'}}/>
                    <div>
                        Photo by <a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Montano</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <br></br>
                <a href='/places'>
                    <button className="teal-btn">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home