import React from 'react';
import { Link } from 'ui-design-components';

const LinkSandbox = () => {
  return (
    <div>
      <div style={{ marginBottom: '30px' }} className="row col-sm-12">
        <h4>Link Component</h4>
      </div>

      <div className="row" style={{marginBottom: '50px'}}>
        <div className="col-sm-4 offset-sm-1">
          <Link href="http://www.google.com">Click me to go to Google!</Link>
        </div>
      </div>

      <div className="row" style={{ margin: '50px', background: 'rgba(255, 255, 153, 0.25)', padding: '20px' }}>
        <code>
          <p>{`import { Link } from 'ui-design-components';`}</p>
          <br />
          <br />
          <br />


          <p>{`<Link href="http://www.google.com">Click me to go to Google!</Link>`}</p>
        </code>
      </div>
    </div>
  );
}

export default LinkSandbox;