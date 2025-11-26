export const getBasePath = (path: string) => {
  const basePath = '/royal-mushrooms-frontend';
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
};
