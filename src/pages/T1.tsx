import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function T1() {
  const { contactId } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/' + contactId)
      .then((response) => response.json())
      .then((json) => {
        setData(json.title);
      });
  }, []);
  return (
    <>
      <h1>{data}</h1>
    </>
  );
}
export default T1;
