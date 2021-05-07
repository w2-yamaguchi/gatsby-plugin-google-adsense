// Validate plugin options
exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    publisherId: Joi.string().required(),
  })
}
