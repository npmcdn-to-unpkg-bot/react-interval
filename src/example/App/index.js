import React from 'react';
import ReactInterval from '../../ReactInterval';
import {name} from '../../../package.json';


const App = React.createClass({
  getInitialState() {
    return {
      callback: this.inc1,
      destroy: false,
      enabled: false,
      timeout: 200,
      count: 0
    };
  },

  inc1() {
    const {count} = this.state;
    this.setState({count: count + 1})
  },


  inc10() {
    const {count} = this.state;
    this.setState({count: count + 10})
  },


  onChangeTimeout({target: {value}}) {
    this.setState({timeout: parseInt(value, 10)});
  },


  onToggleInterval() {
    const {enabled} = this.state;
    this.setState({enabled: !enabled});
  },


  onToggleDestroy() {
    const {destroy} = this.state;
    this.setState({destroy: !destroy});
  },


  onToggleCallback() {
    const {callback} = this.state;
    this.setState({callback: callback === this.inc1 ? this.inc10 : this.inc1});
  },


  render() {
    const {destroy, callback, timeout, enabled, count} = this.state;

    return (
      <div>
        <h1>{name}</h1>

        <div style={{background: destroy ? '#f1f2f3' : '#f1fef3', padding: 10}}>

          {destroy ? null : <ReactInterval {...{timeout, enabled, callback}} />}

          <input
            type="number"
            step="200"
            min="200"
            max="5000"
            value={timeout}
            onChange={this.onChangeTimeout} />
          &nbsp;

          <button disabled={callback === this.inc1 } onClick={this.onToggleCallback}>
            +1
          </button>
          &nbsp;

          <button disabled={callback === this.inc10 } onClick={this.onToggleCallback}>
            +10
          </button>
          &nbsp;

          <button disabled={enabled} onClick={this.onToggleInterval}>
            Start
          </button>
          &nbsp;

          <button disabled={!enabled} onClick={this.onToggleInterval}>
            Stop
          </button>
          &nbsp;

          {count}

        </div>
        <br />

        <button onClick={this.onToggleDestroy}>
          {destroy ? 'Create Interval' : 'Destroy Interval'}
        </button>
      </div>
    );
  }
});


export default App;
