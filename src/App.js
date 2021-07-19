import { useState } from 'react';
import './index.css';
import styles from './App.module.css';
import Section from './components/Section/Section.jsx';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Notification from './components/Notification/Notification.jsx';

export default function FeedbackApp() {
  const [good, setGoodRate] = useState(0);
  // const handleGoodRate = () => {
  //   setGoodRate(prevGood => prevGood + 1);
  // };

  const [neutral, setNeutralRate] = useState(0);
  // const handleNeutralRate = () => {
  //   setNeutralRate(prevNeutral => prevNeutral + 1);
  // };

  const [bad, setBadRate] = useState(0);
  // const handleBadRate = () => {
  //   setBadRate(prevBad => prevBad + 1);
  // };

  const handleFeedbackRate = optionType => {
    switch (optionType) {
      case 'good':
        setGoodRate(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutralRate(prevState => prevState + 1);
        break;

      case 'bad':
        setBadRate(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countGoodFeedbackPercentage = () => {
    const goodFeedbackPecentage = (good * 100) / countTotalFeedback();
    return Math.round(goodFeedbackPecentage) ?? 0;
  };

  return (
    <div className={styles.Wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedbackRate}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countGoodFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given!"></Notification>
        )}
      </Section>
    </div>
  );
}
// ****Old version with class**** //
// import React, { Component } from 'react';
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   }

//   countGoodFeedbackPercentage() {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     const goodFeedbackPecentage = (good * 100) / total;
//     return Math.round(goodFeedbackPecentage);
//   }

//   onLeaveFeedback = label => {
//     this.setState(prevState => ({
//       [label]: prevState[label] + 1,
//     }));
//   };

//   render() {
//     const { good } = this.state;
//     const { neutral } = this.state;
//     const { bad } = this.state;
//     const total = this.countTotalFeedback();
//     const percentage = this.countGoodFeedbackPercentage();

//     return (
//       <div className={styles.Wrapper}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="No feedback given!"></Notification>
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               percentage={percentage}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
