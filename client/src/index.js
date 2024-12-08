import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // هذه مجرد ملفات ستايل، يمكنك تجاهلها إن كانت فارغة
import App from './App';
import reportWebVitals from './reportWebVitals'; // استيراد reportWebVitals

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// إذا كنت ترغب في قياس أداء التطبيق، يمكنك تمرير دالة إلى reportWebVitals
reportWebVitals(console.log); // يمكنك استبدال console.log بأي دالة تريد استخدامها لتسجيل الأداء