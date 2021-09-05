import { NavLink } from 'react-router-dom';
// import { Logo } from 'shared/components';
import { color, font, mixin, sizes, zIndexValues } from '../../shared/utils/styles';
import styled from 'styled-components';

export const NavLeft = styled.div`
  z-index: 150;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  height: 100vh;
  width: 64px;
  background: ${color.backgroundDarkPrimary};
  transition: all 0.1s;
  :hover {
    width: 200px;
  }
`;

export const LogoLink = styled(styled.div)`
  display: block;
  position: relative;
  left: 0;
  margin: 20px 0 10px;
  transition: left 0.1s;
`;

// export const StyledLogo = styled(Logo)`
//   display: inline-block;
//   margin-left: 8px;
//   padding: 10px;
//   ${mixin.clickable}
// `;

export const Bottom = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
`;

export const Item = styled.div`
  position: relative;
  width: 100%;
  height: 42px;
  line-height: 42px;
  padding-left: 64px;
  color: #deebff;
  transition: color 0.1s;
  ${mixin.clickable}
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  i {
    position: absolute;
    left: 18px;
  }
`;

export const CompanyLogo = styled.i`
  position: relative;
  width: 100%;
  height: 42px;
  line-height: 42px;
  padding-left: 64px;
  color: #deebff;
  transition: color 0.1s;
  margin-top: 20px;
  i {
    position: absolute;
    left: 18px;
  }
`;


export const ItemText = styled.aside`
  position: relative;
  right: 12px;
  visibility: hidden;
  opacity: 0;
  text-transform: uppercase;
  transition: all 0.1s;
  transition-property: right, visibility, opacity;
  ${font.size(15)}
  #navigation:hover & {
    right: 0;
    visibility: visible;
    opacity: 1;
  }
`;

export const StyledIcon = styled.i`
  display: inline-block;
`;
