/* eslint-disable react/no-direct-mutation-state */
import { Component } from 'react'
import { Buttons } from './Feedback/Buttons'
import { Statistics } from './Feedback/Statistics'

export class App extends Component {
  static defaultProps  = {
    initialValue: 0
  }

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  }

  handleFeedback = (evt) => {
    this.setState({
      evt: this.state[evt] += 1,
    })
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state
    const total = good + neutral + bad
    return Math.round((good / total) * 100)
  }

  render() {
    const { good, neutral, bad } = this.state
    const total = good + neutral + bad
    const totalPercentage = this.countPositiveFeedbackPercentage()

    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <Buttons onFeedback={this.handleFeedback}/>
        </div>
        <div>
          <h2>Statistics</h2>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={totalPercentage}
            />
          ) : (
            <p>There is no feedback</p>
          )}
        </div>
      </>
    );
  }
}
