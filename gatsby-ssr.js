/* eslint-disable react/jsx-key */
const React = require('react');
const PropTypes = require('prop-types');

const endpoint = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

const AdsenseTag = ({endpoint, publisherId}) => (
  <script
    async
    src={`${endpoint}?client=${publisherId}`}
    crossOrigin="anonymous"
  />
);

AdsenseTag.propTypes = {
  endpoint: PropTypes.string.isRequired,
  publisherId: PropTypes.string.isRequired,
};

exports.onRenderBody = ({setHeadComponents}, pluginOptions) => {
  const publisherId = pluginOptions.publisherId;
  setHeadComponents(
      [<AdsenseTag endpoint={endpoint} publisherId={publisherId} />],
  );
};
