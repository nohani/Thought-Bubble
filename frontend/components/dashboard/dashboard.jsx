import React from 'react';
import DashboardBarContainer from './dashboard_bar_container';
import PostBar from './post_bar/post_bar';
import PostIndexContainerFetchAll from './post_index_container_fetchall';
import PostIndexContainerFetchLiked from './post_index_container_fetchliked';
import SuggestedUsersContainer from './suggested_users/suggested_users_container';
import { Link, Route } from 'react-router-dom'
import DevInfo from './dev_info'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard-fullscreen">
        <DashboardBarContainer />


        <Route path="/dashboard" render={() => (
          <div className="bottom"> 
            <div className="inner-group">
              <div className="central-index">
                <PostBar /> 
                <PostIndexContainerFetchAll /> 
              </div>
              <div className=""> 
                <div className="suggested-users">
                  <SuggestedUsersContainer />
                </div>
                <DevInfo />
              </div>
            </div>
          </div>)} 
        />

        <Route path="/likes" render={() => (
          <div className="bottom-likes-pg"> 
            <div className="inner-group">
              <PostIndexContainerFetchLiked /> 
              <div className="">
                <div className="suggested-users-likes">
                  <SuggestedUsersContainer />
                </div>
                <DevInfo />
              </div>
            </div>
          </div>)}
         />
        

      </div>
    )
  }
}

export default Dashboard;