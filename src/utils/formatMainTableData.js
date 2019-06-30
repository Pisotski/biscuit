// @TODO make with map
export default function (mainTable) {
  const options = {
    weekday: 'short', year: 'numeric', month: 'long', day: 'numeric',
  };
  mainTable.forEach(row => {
    row.startperiod = row.startperiod.toLocaleDateString('en-US', options);
    row.endperiod = row.endperiod.toLocaleDateString('en-US', options);
  });
  return mainTable;
}
