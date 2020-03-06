import React from 'react';
import DashboardBarContainer from './dashboard_bar_container';
import PostBar from './post_bar/post_bar';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // will fetch all blog posts!!
  }

  render() {
    return (
      <div className="dashboard-fullscreen">
        <DashboardBarContainer />
        <PostBar />
      </div>
    )
  }
}

export default Dashboard;