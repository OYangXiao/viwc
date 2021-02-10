import { reactive } from 'vue';

export type attrType = null | string;

export const attributeNames = ['user-id', 'user-list'];
export const root = {
  props: reactive(Object.fromEntries(attributeNames.map((name) => [name, null as attrType]))),
  instance: undefined,
};
