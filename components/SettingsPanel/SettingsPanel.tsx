import React from 'react';
import * as Styled from './SettingsPanel.styles';
import { FiBattery, FiChevronUp, FiVolume2, FiWifi } from 'react-icons/fi';
import SlidingModal from '../SlidingModal/SlidingModal';
import { useActions } from '../../hooks/useActions';

/**
 *Renders settings panel
 *@function SettingsPanel
 *@returns {JSX.Element} - Rendered SettingsPanel component
 */
const SettingsPanel = (): JSX.Element => {
  const { toggleSettingsModal } = useActions();

  return (
    <Styled.Container onClick={() => toggleSettingsModal()}>
      <Styled.Tray>
        <FiChevronUp className="icon" />
      </Styled.Tray>

      <Styled.Settings>
        <FiBattery className="icon" />
        <FiWifi className="icon" />
        <FiVolume2 className="icon" />
      </Styled.Settings>

      <SlidingModal
        variant={'settingsModal'}
        width={'400px'}
        position={{ bottom: '0', right: `16px` }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          consectetur est id ipsum saepe vitae.
        </p>
      </SlidingModal>
    </Styled.Container>
  );
};

export default SettingsPanel;
