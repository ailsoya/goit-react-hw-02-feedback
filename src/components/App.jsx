/* eslint-disable react/no-direct-mutation-state */
import { Component } from 'react'
import { Buttons, Statistics, Section, Notification } from './FeedbackElements'

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
        <Section title="Please leave feedback">
          <Buttons onFeedback={this.handleFeedback}/>
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={totalPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
