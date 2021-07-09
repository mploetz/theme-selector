import React, { useState } from "react";
import { DropDown, DropDownSelectableItem, DropDownSelectableList } from "@ferris/react/components/drop-downs";

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export const PanelContent = (props) => {
  const { toggleCallback } = props;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <DropDown
        buttonValue="Sort"
        iconName="sort"
        open={ open }
        onRequestToggle={ () => toggleCallback }
        // onRequestClose={(): void => this.handleRequestClose()}
        // onCancel={(): void => this.handleCloseCancel()}
        collapsePadding={true}
      >
        <DropDownSelectableList
          onSelect={ () => setOpen(false) }
          closeOnSelect
        >
          <DropDownSelectableItem value="0" id={0}>
            Distance
          </DropDownSelectableItem>
          <DropDownSelectableItem value="1" id={1}>
            Match
          </DropDownSelectableItem>
        </DropDownSelectableList>
      </DropDown>
    </div>
  );
};
