import * as React from 'react';

export default function ExpandSideBars() {
  
  function printInfo(): string {
    alert('Hello Abhay');
    return 'Hello Abhay';
  }

  return <div>{printInfo()}</div>;
}
