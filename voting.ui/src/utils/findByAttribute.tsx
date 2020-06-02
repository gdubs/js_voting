export const findByAttribute = (component: any, attr: string) => {
  return component.find(`[data-test-id='${attr}']`);
};
