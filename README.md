<h1 align="center">
<strong>gatsby-plugin-google-adsense</strong>
</h1>

<p align="center">
Add Google Adsense Tag to your Gatsby site.
</p>

<p align="center">
<img alt="npm (scoped)" src="https://img.shields.io/npm/v/@w2-yamaguchi/gatsby-plugin-google-adsense">
<img alt="npm" src="https://img.shields.io/npm/dt/@w2-yamaguchi/gatsby-plugin-google-adsense">
</p>

## Usage

### Install the plugin:

```
npm install @w2-yamaguchi/gatsby-plugin-google-adsense
```

or

```
yarn add @w2-yamaguchi/gatsby-plugin-google-adsense
```

### Add it to your gatsby-config.js & configure Your publisher ID(required):

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@w2-yamaguchi/gatsby-plugin-google-adsense`,
      options: {
        publisherId: "YOUR_GOOGLE_ADSENSE_PUBLISHER_ID", // Required
      },
    },
  ],
};
```

## Configuration

The options are as follows:

| Property      | Type     | Default        | Description                                                                                                                                      |
| ------------- | -------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `publisherId` | `String` | n/a (required) | Your publisher ID. This looks like this: pub-1234567891234567. [See here](https://support.google.com/adsense/answer/105516) for more information.|
