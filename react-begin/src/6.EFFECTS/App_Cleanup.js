import { useState, useEffect } from 'react';

function Hello() {
  useEffect(() => {
    console.log('hi');
    return () => console.log('bye');
  }, []);
  return <h1>Hello</h1>;
}

function App_cleanup() {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      {show ? <Hello /> : null}
      <button onClick={onClick}>{show ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App_cleanup;
