export const mapDataToState = (data) => {
  if (!Array.isArray(data) || !data.length) {
    return [];
  }
  const response = data.map((item) => ({ id: item._id, value: item.title }));
  return response;
};

export const addNewDataToState = ({ oldData, newData }) => {
  if (!newData) {
    return [];
  }
  if (!Array.isArray(oldData) || !oldData.length) {
    return [{ id: newData._id, value: newData.title }];
  }
  const response = [...oldData, { id: newData._id, value: newData.title }];
  return response;
};

export const updateNewDataToState = ({ oldData, newData }) => {
  if (!newData) {
    return [];
  }
  if (!Array.isArray(oldData) || !oldData.length) {
    return [{ id: newData._id, value: newData.title }];
  }
  let updateIndex = oldData.findIndex((element) => element.id === newData._id);
  if (updateIndex < 0) {
    return oldData;
  }
  const mergeData = [...oldData];
  mergeData[updateIndex] = { id: newData._id, value: newData.title };
  return mergeData;
};

export const deleteDataFromState = ({ data, id }) => {
  if (!data || !id) {
    return [];
  }
  if (!Array.isArray(data) || !data.length) {
    return [];
  }
  const response = data.filter((element) => element.id !== id);
  return response;
};
