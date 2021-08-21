import React from 'react'
import Error from "./Error"

function Error404() {
    return (
        <Error 
            error_name="404" 
            error_msg="Looks like we can't find what you are looking for"
        />
    )
}

export default Error404
