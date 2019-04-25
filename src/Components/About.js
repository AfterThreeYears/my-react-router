import React, { PureComponent } from "react";
import "./About.css";
import TimerHoc from './TimerHoc';

class SnapshotSample extends PureComponent {
  componentDidUpdate(prevProps, prevState, prevScrollHeight) {

  }

  render() {
    return (
      <section>
        <div className="snapshot-sample" ref={n => (this.rootNode = n)}>
        </div>
        {(this.props.time).toLocaleTimeString()}
      </section>
    );
  }
}

export default TimerHoc(SnapshotSample);
