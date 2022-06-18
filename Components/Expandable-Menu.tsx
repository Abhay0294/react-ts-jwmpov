import * as React from 'react';
import '../style';

export default function ExpandSideBars() {
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
