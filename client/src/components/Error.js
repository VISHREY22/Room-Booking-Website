import React from 'react'
function Error({message}) {
    return (
        <div  className="container-align">
            <div class="alert alert-danger" role="alert">
                Something Went Wrong! Try Again Later..
                {message}
            </div>
        </div>
    )
}

export default Error
