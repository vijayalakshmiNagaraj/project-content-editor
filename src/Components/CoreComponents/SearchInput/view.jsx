import React from 'react';
import './Styles.css';
import { icons } from '../../../assets';
import {Image} from '@core'

const SearchInput = ({ value, onChange }) => {
  return (
    <div className={"wrapper"}>
      <span>
        <Image src={icons.searchicon} width={"10px"} height={"10px"}/>
      </span>
      <input 
        type="text" 
        className={"input"} 
        placeholder="dfin"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;