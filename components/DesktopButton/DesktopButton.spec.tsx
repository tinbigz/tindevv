import { shallow } from 'enzyme';
import React from 'react';
import Image from 'next/image';

import DesktopButton, { Props } from './DesktopButton';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */

const mockProps: Props = {
  text: 'This PC',
  iconSize: { width: 50, height: 50 },
  iconSrc: 'assets/icons/Desktop/this_pc.webp',
};

const setup = (props: Props) => {
  return shallow(<DesktopButton {...props} />);
};

describe('DesktopButton', () => {
  const wrap = setup(mockProps);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render correct icon image src', () => {
    const iconImg = wrap.find(Image);
    expect(iconImg.prop('src')).toBe(mockProps.iconSrc);
  });
  it('should render correct icon image alt', () => {
    const iconImg = wrap.find(Image);
    expect(iconImg.prop('alt')).toBe(mockProps.text);
  });
  it('should render correct icon image height', () => {
    const iconImg = wrap.find(Image);
    expect(iconImg.prop('height')).toBe(mockProps.iconSize.height);
  });
  it('should render correct icon image width', () => {
    const iconImg = wrap.find(Image);
    expect(iconImg.prop('width')).toBe(mockProps.iconSize.width);
  });

  it('should render correct icon text', () => {
    const buttonText = wrap.find({ children: mockProps.text });
    expect(buttonText.length).toBe(1);
  });
});
