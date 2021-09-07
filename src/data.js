export const getData = async () => {
  let data = await fetch(
    `https://www.hpb.health.gov.lk/api/get-current-statistical`
  );
  data = await data.json();
  return data.data;
};
