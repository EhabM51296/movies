import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReportHandler } from 'web-vitals'; // Import ReportHandler from 'web-vitals'

const onPerfEntry: ReportHandler = (metric) => {
  // Do something with the metric, e.g., send it to an analytics service.
  console.log(metric);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Pass the onPerfEntry callback function to reportWebVitals
reportWebVitals(onPerfEntry);
