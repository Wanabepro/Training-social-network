import React from "react";
import { withAuthRedirect } from './../../HOC/withAuthRedirect';

const Music = () => {
    return(
        <div>
            Here will be music
        </div>
    )
}

export default withAuthRedirect(Music)