import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import SemiCircularBar from  '../index';

const SemiCircularBar_SAMPLE_THICKNESS = 10;
const SemiCircularBar_SAMPLE_COLOR = '#4CAF50';
const SemiCircularBar_SAMPLE_MIN = 0;
const SemiCircularBar_SAMPLE_MAX = 100;
const SemiCircularBar_SAMPLE_VALUE = 30;
const SemiCircularBar_SAMPLE_SHOWMIN = false;
const SemiCircularBar_SAMPLE_SHOWMAX = false;
const SemiCircularBar_SAMPLE_SHOWTEXT = false;

test('SemiCircularBar renders null when no required props is passed', t => {
  const wrapper = shallow(<SemiCircularBar />);
  t.is(wrapper.type(), null);
});

test('SemiCircularBar renders content when required props is passed', t => {
  const wrapper = shallow(<SemiCircularBar />);
  wrapper.setProps({
    thickness: SemiCircularBar_SAMPLE_THICKNESS,
    color: SemiCircularBar_SAMPLE_COLOR,
    min: SemiCircularBar_SAMPLE_MIN,
    max: SemiCircularBar_SAMPLE_MAX,
    value: SemiCircularBar_SAMPLE_VALUE,
    showMin: SemiCircularBar_SAMPLE_SHOWMIN,
    showMax: SemiCircularBar_SAMPLE_SHOWMAX,
    showText: SemiCircularBar_SAMPLE_SHOWTEXT
  });
  t.not(wrapper.type(), null);
});