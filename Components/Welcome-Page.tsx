import * as React from 'react';
import '../style';
import '@fortawesome/fontawesome-free/js/all.js';
import ExpandSideBars from './Expandable-Menu';

export class Welcome extends React.Component {
  state = {
    expand: false,
  };

  render() {
    return (
      <div className="main-container">
        <h1 className="header">Namaste React</h1>
        <div className="header-panel">
          <div className="button-container">
            <button>
              <i className="fa-solid fa-house-chimney" title="Home"></i>
            </button>
            <button>
              <i className="fa-solid fa-code" title="Code"></i>
            </button>
            <button>
              <i className="fa-solid fa-book" title="Documentation"></i>
            </button>
          </div>
          <button onClick={this.changeState}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className="expand-bars">
          {this.state.expand && <ExpandSideBars />}
        </div>
        <div className="empty-space"></div>
        <div className="techno-section">
          <div className="p-language">JavaScript</div>
          <div className="p-language">React</div>
          <div className="p-language">HTML</div>
          <div className="p-language">CSS</div>
        </div>
      </div>
    );
  }

  changeState = () => {
    if (this.state.expand) {
      this.setState({
        expand: false,
      });
    } else
      this.setState({
        expand: true,
      });
  };
}
