import React from 'react'

export default function TimerHoc(WrappedComponent) {
  return class TimerHoc extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date(),
      }
    }

    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState(() => ({
          time: new Date(),
        }));
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timer); 
    }
    
    

    render() {
      const { time } = this.state;
      const { props } = this.props;
      return (
        <WrappedComponent time={time} {...props} />
      );
    }
  }
}
