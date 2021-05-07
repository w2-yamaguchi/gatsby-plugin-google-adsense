const React = require("react")

const endpoint = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"

const AdsenseTag = ({ endpoint, publisherId }) => (
  <script
    async
    src={`${endpoint}?client=${publisherId}`}
    crossOrigin="anonymous"
  />
)

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const publisherId = pluginOptions.publisherId
  setHeadComponents([<AdsenseTag endpoint={endpoint} publisherId={publisherId} />])
}
