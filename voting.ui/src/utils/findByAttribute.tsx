export const findByAttribute = (component: any, attr: string) => {
  return component.find(`[test-id='${attr}']`);
};
