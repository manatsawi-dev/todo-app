export const getBackgroundColor = (variant) => {
  switch (variant) {
    case "info":
      return "#94d0cc";
    case "danger":
      return "#f55c47";
    default:
      return "#1eae98";
  }
};
