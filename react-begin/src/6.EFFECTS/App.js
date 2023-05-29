import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => setCounter((prev) => prev + 1);

  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  console.log('time');
  // state가 변화되어도 useEffect는 한번만 실행됨
  // => API를 한번만 호출하게 하고 그것을 반복하지 않는다
  useEffect(() => {
    console.log('call the api..');
  }, []); // 빈값이기때문에 react가 지켜볼것이 없어서 한번만 실행된다

  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log(keyword, 'keyword 실행');
    }
  }, [keyword]); // keyword에만 변화가 있을때 실행된다

  useEffect(() => {
    console.log(counter, 'counter 실행');
  }, [counter]); // counter에만 변화가 있을때 실행된다

  useEffect(() => {
    console.log('keyword, counter 실행');
  }, [keyword, counter]);
  return (
    <div>
      <input
        valye={keyword}
        onChange={onChange}
        type='text'
        placeholder='search here'
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>클릭!@</button>
    </div>
  );
}

export default App;
