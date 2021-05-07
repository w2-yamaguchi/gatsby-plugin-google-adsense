/* eslint-disable react/jsx-key */
const React = require('react');
const PropTypes = require('prop-types');

const endpoint = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

AdsenseTag.propTypes = {
  endpoint: PropTypes.string.isRequired,
  publisherId: PropTypes.string.isRequired,
};

const AdsenseTag = ({endpoint, publisherId}) => (
  <script
    async
    src={`${endpoint}?client=${publisherId}`}
    crossOrigin="anonymous"
  />
);

exports.onRenderBody = ({setHeadComponents}, pluginOptions) => {
  const publisherId = pluginOptions.publisherId;
  setHeadComponents(
      [<AdsenseTag endpoint={endpoint} publisherId={publisherId} />],
  );
};
