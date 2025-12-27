
/**
 * Flattens a category's product data, handling nested folders recursively.
 * @param {Array} items - The list of items (products or folders).
 * @returns {Array} - A flat list of product objects.
 */
export const flattenProducts = (items) => {
  let flatList = [];
  items.forEach(item => {
    if (item.type === 'folder' && item.children) {
      flatList = [...flatList, ...flattenProducts(item.children)];
    } else if (item['id-produk'] || item['nama-produk']) { // Identifying product by id or name
       // Ensure image path is correct or absolute if needed
       // The JSON has "/src/data...", we might need to adjust based on Vite's import glob or just use as is if public.
       // However, since they are in src/data, we might need to dynamic import or rely on Vite's asset handling.
       // For now, assuming the paths in JSON are usable or need minor tweak.
       flatList.push(item);
    }
  });
  return flatList;
};
