import React from 'react';
import DashboardBarContainer from './dashboard_bar_container';
import PostBar from './post_bar/post_bar';
import PostIndexContainerFetchAll from './post_index_container_fetchall';
import PostIndexContainerFetchLiked from './post_index_container_fetchliked';
import { Link, Route } from 'react-router-dom'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard-fullscreen">
        <DashboardBarContainer />

        <Route path="/dashboard" render={() => (<PostBar />)} />

        <Route path="/dashboard" render={() => (<div className="bottom"> <PostIndexContainerFetchAll /> </div>)} />
        <Route path="/likes" render={() => (<div className="bottom-likes-pg"> <PostIndexContainerFetchLiked /> </div>)} />
        

      </div>
    )
  }
}

export default Dashboard;