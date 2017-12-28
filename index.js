import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import CollapsingSection from './CollapsingSection';
import CollapsingComponentStyle from 'styles/CollapsingComponentStyle';

const CollapsingComponent = (props) => (
  <CollapsingComponentStyle>
    <TitleBar className={'collapse-title ' + props.titleClasses} onClick={(evt) => props.toggleCollapse(props.collapsed, props.id)}>{props.title}</TitleBar>
    <CollapsingSection className={'collapse-section ' + props.collapseClasses }>{props.children}</CollapsingSection>
  </CollapsingComponentStyle>
);

CollapsingComponent.defaultProps = {
  titleClasses: '',
  collapseClasses: 'collapsed',
  collapsed: true,
};

CollapsingComponent.propTypes = {
  titleClasses: PropTypes.string,
  collapseClasses: PropTypes.string,
  collapsed: PropTypes.bool,
  toggleCollapse: PropTypes.func.isRequired,
};

export default CollapsingComponent;
