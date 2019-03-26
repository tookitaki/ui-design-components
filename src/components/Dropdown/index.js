import React from 'react';
import Select from 'antd/lib/select';

import style from './index.scss';

const Option = Select.Option;

const Dropdown = (props) => {
  return (
    <Select className={style.TTDropdown} style={{ width: '100%' }} {...props} />
  );
}

const MultiDropdown = (props) => {
  return (
    <Select
      style={{ width: '100%' }}
      {...props}
      mode="multiple">
    </Select>
  );
}

export { Dropdown, MultiDropdown, Option }
