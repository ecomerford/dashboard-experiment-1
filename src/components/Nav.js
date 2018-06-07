import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div className="NavBar">
        <p><a href="https://github.com/mozilla/telemetry-dashboard/issues">Report a Bug</a></p>
        <p><a href="https://telemetry.mozilla.org/">Telemetry Portal</a></p>
        <p><a href="https://telemetry.mozilla.org/new-pipeline/tutorial.html#HistogramDashboard">Usage Tutorial</a></p>
      </div>
    )
  }
}

export default Navigation;
