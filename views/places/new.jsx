const React = require('react')
const Def = require('../default')

function new_form(data) {
    let message = ''
    if (data.message) {
        message = (
            <h4 className='alert-danger'>
                {data.message}
            </h4>
        )
    }
    return (
        <Def>
            <main id='new-main'>
                <h1>Add a New Place</h1>
                {message}
                <br></br>
                <form method='POST' action='/places'>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='name'>Place Name</label>
                            <input className='form-control' id='name' name='name' required />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='pic'>Place Picture</label>
                            <input className='form-control' type='url' id='pic' name='pic' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='city'>City</label>
                            <input className='form-control' id='city' name='city' />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='state'>State</label>
                            <input className='form-control' id='state' name='state' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='cuisines'>Cuisines</label>
                            <input className='form-control' id='cuisines' name='cuisines' required />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='founded'>Founded Year</label>
                            <input className='form-control' id='founded' name='founded' type='number' value={new Date().getFullYear} />
                        </div>
                    </div>
                    <br></br>
                    <input className='teal-btn medium' type='submit' value='Add Place' />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form