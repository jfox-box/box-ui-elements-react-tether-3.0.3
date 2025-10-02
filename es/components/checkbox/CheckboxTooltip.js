import * as React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { Tooltip, TooltipProvider } from '@box/blueprint-web';
import IconInfo from '../../icons/general/IconInfo';
const messages = defineMessages({
  checkboxTooltipIconInfoText: {
    "id": "boxui.checkboxTooltip.iconInfoText",
    "defaultMessage": "Info"
  }
});
const CheckboxTooltip = ({
  tooltip
}) => /*#__PURE__*/React.createElement("div", {
  className: "checkbox-tooltip-wrapper"
}, /*#__PURE__*/React.createElement(TooltipProvider, null, /*#__PURE__*/React.createElement(Tooltip, {
  content: tooltip
}, /*#__PURE__*/React.createElement("div", {
  className: "info-tooltip"
}, /*#__PURE__*/React.createElement(IconInfo, {
  height: 16,
  title: /*#__PURE__*/React.createElement(FormattedMessage, messages.checkboxTooltipIconInfoText),
  width: 16
})))));
export default CheckboxTooltip;
//# sourceMappingURL=CheckboxTooltip.js.map