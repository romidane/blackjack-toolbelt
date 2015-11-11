function fileSelector(brand, type) {
  const config = require('component.json');

  if (config.templates[brand] && config.templates[brand][type]) {
    return config.templates[brand][type];
  }
  if (config.templates.base[type]) {
    return config.templates.base[type];
  };
  return null;
}

module.exports = fileSelector;
