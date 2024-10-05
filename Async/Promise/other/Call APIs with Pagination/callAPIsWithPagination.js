// const fetchList = (since?: number) => 
//   Promise<{items: Array<{id: number}>}>

const fetchListWithAmount = async (amount = 5) => {
  const result = [];

  function request(id) {
    return fetchList(id).then(({ items }) => {
      result.push(...items);

      if (result.length >= amount || !items.length) {
        return result.slice(0, amount);
      }

      const { id: lastItemId } = result.at(-1);

      return request(lastItemId);
    });
  } 

  return request();
}