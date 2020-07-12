import React from 'react';
import Loading from "../Loading/Loading";
import './LaunchesList.scss'


const NoLaunchesToShow = ({errorLaunches, launchesList}) => {
    return (
        <div className="no-launches-content">
        {errorLaunches && launchesList.length === 0 ?
                "No launches to show..."
                : <Loading />}
        </div>
    );
};

export default NoLaunchesToShow;