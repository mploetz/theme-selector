/* eslint-env browser */
import { useEffect, useGlobals } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { PARAM_KEY } from './constants';

export const withGlobals = (StoryFn) => {
  const [{ selectedStylesheetID }, updateGlobals] = useGlobals();

  const { stylesheets = [] } = useParameter(PARAM_KEY, {});
  const selectedStylesheet = stylesheets.find((s) => s.id === selectedStylesheetID);

  useEffect(() => {
    if (selectedStylesheet) {
      updateStylesheet(selectedStylesheet.url);
    }
  }, [selectedStylesheetID]);

  return StoryFn();
};

const updateStyleSheet = url => {
  const headEl = document.querySelector('head');
  let stylesheetEl = document.querySelector('link[data-toggle]');

  if (!stylesheetEl) {
    stylesheetEl = document.createElement("link");
    stylesheetEl.rel = 'stylesheet';
    stylesheetEl.dataset.toggle = true;
    headEl.appendChild(stylesheetEl);
  }

  stylesheetEl.href = url;
};