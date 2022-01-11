import React, { Component } from 'react';

class CountDownTimer extends Component {
    // counts down from the GMT time given in format ex{ Mon, 1 Jan 2022 08:00:00 GMT }
    state = {
      days: 0,
      hours: '00',
      minutes: '00',
      seconds: '00',
      finished: false
    }

    componentDidMount () {
      setInterval(() => {
        const endDate = new Date(this.props.date);
        const timeLeft = endDate - new Date();
        if (timeLeft < 1) {
          this.setState({ finished: true });
        } else {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
          const seconds = Math.floor((timeLeft / (1000)) % 60);
          this.setState({
            hours: hours > 9 ? hours : `0${hours}`,
            minutes: minutes > 9 ? minutes : `0${minutes}`,
            seconds: seconds > 9 ? seconds : `0${seconds}`,
            days
          });
        }
      }, 1000);
    }

    PropperOutputContext () {
      const { days, hours, minutes, seconds } = this.state;
      if (days > 1) {
        return `${days} Days : ${hours} Hours : ${minutes}  Minutes : ${seconds} Seconds`;
      }
      if (days === 1) {
        return `${days} Day : ${hours} Hours : ${minutes}  Minutes : ${seconds} Seconds`;
      } else {
        return `${hours} Hours : ${minutes}  Minutes : ${seconds} Seconds`;
      }
    }

    render () {
      const { finished } = this.state;
      const countdown = this.PropperOutputContext();
      return (!finished) ? (<p>{ `${countdown}` }</p>) : (<p>Keep an eye out for time sensitive promotions!</p>);
    }
}

export default CountDownTimer;
