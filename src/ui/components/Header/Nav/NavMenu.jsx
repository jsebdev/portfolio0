import React from 'react';
import { desktopMenu, dropDownMenu } from '../../../helpers/strings';
import {
  LinkS,
  NavItemS,
  NavMenuContainerS,
  NavMenuS,
} from '../../../styledComponents/NavMenuStyled';

export const NavMenu = ({
  type = desktopMenu,
  active,
  closeMenu = () => {},
}) => {
  return (
    <NavMenuContainerS type={type} active={active}>
      <NavMenuS type={type}>
        <NavItemS type={type}>
          <LinkS onClick={closeMenu} to='about'>
            About
          </LinkS>
        </NavItemS>
        <NavItemS type={type}>Resume</NavItemS>
        <NavItemS type={type}>
          <LinkS onClick={closeMenu} to='work'>
            Work
          </LinkS>
        </NavItemS>
        {/* <NavItemS>Lessons</NavItemS> */}
        <NavItemS type={type}>
          <LinkS onClick={closeMenu} to='contact'>
            Contact
          </LinkS>
        </NavItemS>
      </NavMenuS>
    </NavMenuContainerS>
  );
};
