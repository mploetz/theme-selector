import React, { useCallback } from "react";
import { useGlobals, useParameter } from "@storybook/api";
import { Icons, IconButton, WithTooltip, TooltipLinkList } from "@storybook/components";
import { TOOL_ID, PARAM_KEY } from "./constants";

const makeStylesheetList = (ls, set, current, close) => {
  return ls
    .map(styleSheet => {
      return {
        ...styleSheet,
        onClick: () => {
          set(styleSheet.id);
          close();
        },
        active: styleSheet.id === current,
      };
    });
}

export const Tool = () => {
  const [{ selectedStylesheetID }, updateGlobals] = useGlobals();

  const { stylesheets = [] } = useParameter(PARAM_KEY, '');
  console.log(stylesheets);

  const updateSelectedStylesheet = useCallback(
    (id) =>
      updateGlobals({
        selectedStylesheetID: id,
      }),
    [selectedStylesheetID]
  );

  if (stylesheets.length && !selectedStylesheetID) {
    updateSelectedStylesheet(stylesheets[0].id);
  }

  return (
    stylesheets.length ?
    <WithTooltip
      placement="top"
      trigger="click"
      tooltip={ ({ onHide }) => (
        <TooltipLinkList links={ makeStylesheetList(stylesheets, updateSelectedStylesheet, selectedStylesheetID, onHide) } />
      ) }
      closeOnClick
      >
      <IconButton
        key={ TOOL_ID }
        title="Toggle stylesheet"
      >
        <Icons icon="paintbrush" />
      </IconButton>
    </WithTooltip>
    : ''
  );
};