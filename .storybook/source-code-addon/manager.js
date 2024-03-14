import React, { useState } from 'react';
import { AddonPanel, Placeholder } from '@storybook/components';
import { useParameter, addons, types } from '@storybook/manager-api';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { themes } from '@storybook/theming';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './source-code.css';

const customOneLight = { ...oneLight };
customOneLight['pre[class*="language-"]'].background = 'transparent';
customOneLight['code[class*="language-"]'].background = 'transparent';

addons.register('my/panel', () => {
  addons.add('my-panel-addon/panel', {
    title: 'View Code',
    type: types.PANEL,
    paramKey: 'sdsCodePreview',
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
                <button
                  key={index}
                  onClick={() => handleTabClick(item.tab)}
                  className={item.tab === selectedTab ? "activeTabButton" : "tabButton"}
                >
                  {item.tab}
                </button>
              ))}
              {preview.map((item, index) => {
                if (item.tab === selectedTab && item.template) {
                  return (
                    <div key={index} className="codeContainer">
                      <CopyToClipboard text={item.template.default}>
                        <button className="tabButton copyButton">Copy Code</button>
                      </CopyToClipboard>
                      <SyntaxHighlighter language="typescript" style={customOneLight}>
                        {item.template.default}
                      </SyntaxHighlighter>
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
