// PodoFrontGonnet/src/utils/getImageUrl.js

export function getImageUrl(path) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  return `${baseURL}${path}`;
}
