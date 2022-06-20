import * as React from 'react';
import '../style';

export default function ExpandSideBars() {
  /*
  Here JSX.Element is a return type of React.createElement()
  */
  let C1 = (): JSX.Element => <div>test</div>;

  return (
    <div className="expandable-panel">
      <ul>
        <li>LeetCode</li>
        <hr className="hr-line" />
        <li>Geeks4Geeks</li>
        <hr className="hr-line" />
        <li>HackerRank</li>
        <hr className="hr-line" />
        <li>HackerEarth</li>
        <hr className="hr-line" />
        <li>Codality</li>
        <hr className="hr-line" />
      </ul>
    </div>
  );
}
