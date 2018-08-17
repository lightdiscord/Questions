import * as Metas from '../../../content';

export const findById = (id) => {
  return all().find(({ id: iid }) => iid === id);
};

export const all = () => {
  return Object.values(Metas);
};
