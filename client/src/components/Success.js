import React from 'react'

function Success({ message }) {
    return (
        <div className='container-align'>
            <div class="alert alert-success" role="alert">
                {message}
            </div>
        </div>
    )
}

export default Success
