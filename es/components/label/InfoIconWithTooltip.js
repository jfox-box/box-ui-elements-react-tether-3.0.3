import * as React from 'react';
import { Tooltip, TooltipProvider } from '@box/blueprint-web';
import InfoBadge16 from '../../icon/fill/InfoBadge16';
const InfoIconWithTooltip = ({
  className = '',
  iconProps,
  tooltipText
}) => /*#__PURE__*/React.createElement("span", {
  key: "infoIcon",
  className: `${className} tooltip-icon-container`
}, /*#__PURE__*/React.createElement(TooltipProvider, null, /*#__PURE__*/React.createElement(Tooltip, {
  content: tooltipText
}, /*#__PURE__*/React.createElement("span", {
  className: "info-icon-container"
}, /*#__PURE__*/React.createElement(InfoBadge16, iconProps)))));
export default InfoIconWithTooltip;
//# sourceMappingURL=InfoIconWithTooltip.js.map