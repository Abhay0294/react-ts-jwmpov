import * as React from 'react';
import '../style';
import '@fortawesome/fontawesome-free/js/all.js';
import ExpandSideBars from './Expandable-Menu';

export class Welcome extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="header">Namaste React</h1>
        <div className="header-panel">
          <div className="button-container">
            <div className="fa-solid fa-house-chimney" title="Home"></div>
            <div className="fa-solid fa-code" title="Code"></div>
            <div className="fa-solid fa-book" title="Documentation"></div>
          </div>
          <div
            className="fa-solid fa-bars"
            onClick={() => <ExpandSideBars />}
          ></div>
        </div>
      </div>
    );
  }
}
