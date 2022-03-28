import React from "react";
import { withAuthRedirect } from './../../HOC/withAuthRedirect';

const Images = () => {
    return(
        <div>
            Here will be images
        </div>
    )
}

export default withAuthRedirect(Images)