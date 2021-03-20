const path = require('path');

// Resolves the path
exports.pagePath = (page) => {
  // Helper function
  const pathResolver = (params) => {
    path.join(
      path.resolve() +
        `/app/views/${params}.html`
    );
  };

  // switch statement depending on the passed param.
  switch (page) {
    case 'shorturl':
      pathResolver('shorturl');
      break;

    default:
      pathResolver('home');
  }
};
