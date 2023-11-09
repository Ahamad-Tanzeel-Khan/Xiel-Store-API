// api/middleware/lowercaseSearch.js
module.exports = async (ctx, next) => {
    if (ctx.request.url.startsWith('/api/products') && ctx.request.query['filters[title][$contains]']) {
      ctx.request.query['filters[title][$contains]'] = ctx.request.query['filters[title][$contains]'].toLowerCase();
    }
    await next();
  };
  