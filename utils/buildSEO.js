/**
 * builds SEO `object` with the default properties
 * @param {string} page - the title of the page
 * @param {string} description - the description of the page
 * @param {object} options - all optional `SEO` properties
 */
const buildSEO = (page, description, options) => {
  const SEO = {
    // Og tags
    openGraph: {
      title: `${page} - DealVend`,
      description,
    },

    // Other , which can overwrite `openGraph` tags
    ...options,

    title: `${page} - DealVend`,
    description,
  };

  return SEO;
};

export default buildSEO;
