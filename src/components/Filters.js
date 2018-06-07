import React, {Component} from "react";

class Filters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filters">
        <div>
          <h2 className="probe-header">
            My probe:
          </h2>
          <select name="probes">
            <option value="probe">Probe</option>
          </select>
          <p>Probe description.</p>
        </div>
        <div>
          <p>I want to view...
            <select name="data-type">
              <option name="per user">per user</option>
              <option name="per ping">per ping</option>
            </select>
            data
          </p>
        </div>
      </div>
    )
  }
}

export default Filters;
