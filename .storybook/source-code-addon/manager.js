import React, { useState } from 'react';
import { AddonPanel, Placeholder } from '@storybook/components';
import { useParameter, addons, types } from '@storybook/api';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { themes } from '@storybook/theming';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

addons.register('my/panel', () => {
  addons.add('my-panel-addon/panel', {
    title: 'View Code',
    type: types.PANEL,
    render: ({ active, key }) => {
      const preview = useParameter('preview', null);
      const [selectedTab, setSelectedTab] = useState(null);

      const handleTabClick = (tab) => {
        setSelectedTab(tab);
      };

      return (
        <AddonPanel key={key} active={active}>
          {preview && preview.length > 0 ? (
            <div>
              {preview.map((item, index) => (
                <button key={index} onClick={() => handleTabClick(item.tab)}>
                  {item.tab}
                </button>
              ))}
              {preview.map((item, index) => {
                if (item.tab === selectedTab && item.template) {
                  return (
                    <div key={index}>
                      <div>
                        <SyntaxHighlighter language="typescript" style={oneLight}>
                          {item.template.default}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ) : (
            <Placeholder>No preview data available for this story.</Placeholder>
          )}
        </AddonPanel>
      );
    },
  });
});

addons.setConfig({
  theme: themes.light,
});

