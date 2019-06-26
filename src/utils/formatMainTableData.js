export default function (response2) {
  const options = {
    weekday: 'short', year: 'numeric', month: 'long', day: 'numeric',
  };
  response2.forEach(row => {
    row.startperiod = row.startperiod.toLocaleDateString('en-US', options);
    row.endperiod = row.endperiod.toLocaleDateString('en-US', options);
  });
  return response2;
}
