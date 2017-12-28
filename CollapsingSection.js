import styled from 'styled-components';
const CollapsingSection = styled.div`
  transition: all 1s ease;
  &.collapse-section {
    &.collapsed {
      height: 0px;
      overflow-y: hidden;
      min-height: 0px;
      padding: 0px;
      border: none;
      margin-bottom: 0px;
    }
  }
`;
export default CollapsingSection;
