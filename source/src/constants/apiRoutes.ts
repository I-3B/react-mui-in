let API_ROUTES = {
  ADMINS: {
    root: "admins",
    LOGIN: "login",
    ADD: "",
    GET_ALL: "",
    GET: (id: string) => id,
    EDIT: (id: string) => id,
    DELETE: (id: string) => id,
  },
  USERS: {
    root: "users",
    GET_ALL: "",
    GET: (id: string) => id,
    DELETE: (id: string) => id,
  },
  STATICS: {
    root: "statistics",
    GET: "",
  },
} as const;

const controllersArr = Object.entries(API_ROUTES).map(([controllerKey, { root, ...routes }]) => {
  const routesArr = Object.entries(routes);
  const routesPrefixed = Object.fromEntries(
    routesArr.map(([routeKey, route]) => {
      if (typeof route === "function") {
        return [
          routeKey,
          (...params: Parameters<typeof route>) =>
            `${root}/${(route as (...args: unknown[]) => unknown)(...params)}`,
        ];
      }
      return [routeKey, `${root}/${route}`];
    })
  );
  return [controllerKey, { ...routesPrefixed, root }];
});
API_ROUTES = Object.fromEntries(controllersArr) as typeof API_ROUTES;

export default API_ROUTES;
