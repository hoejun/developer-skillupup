import React from 'react';
import '../App.css';

const Search = (props) => {
  // const [profileValue, setProfileValue] = useState('');
  const handleChange = (event) => {
    // setProfileValue(event.target.value);
    props.onHandleInput(event.target.value);
  };

  return (
    <div className='search-box'>
      {/* <input type='text' value={profileValue} onChange={handleChange} /> */}
      <input
        className='inp-sch'
        type='text'
        value={props.inputValue}
        onChange={handleChange}
      />
      {/* <div>{profileValue}</div> */}
    </div>
  );
};

export default Search;
