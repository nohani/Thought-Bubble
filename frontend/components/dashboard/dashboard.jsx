import React from 'react';
import DashboardBarContainer from './dashboard_bar_container';

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
      </div>
    )
  }
}

export default Dashboard;