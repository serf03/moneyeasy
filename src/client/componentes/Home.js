import React, { Fragment } from 'react'
import Content from './Content'
import Sidebar from './sidebar'


const Home = () => {
    return(
        <Fragment >
        <div className="d-flex align-items-stretch">
            <Sidebar />
            <Content/>
        </div>
        </Fragment>
    )
}

export default Home;