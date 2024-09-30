"use strict";

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/polsovatels/edit-score/:id",
      handler: "polsovatel.editScore",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
