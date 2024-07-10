export const fetchData = async () => {
  const response = await fetch(
    "https://run.mocky.io/v3/03ac56dc-6878-434f-9d59-5036b4d15004"
  );
  const data = await response.json();
  return data;
};
