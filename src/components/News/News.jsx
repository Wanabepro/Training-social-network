import React from "react";
import { withAuthRedirect } from './../../HOC/withAuthRedirect';

const News = () => {
    return (
        <div>
            Here will be news
        </div>
    )
}

export default withAuthRedirect(News)