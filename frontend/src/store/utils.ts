export const settokenLocal = (): { token: string } | null => {
  const GuruSysData = localStorage.getItem("GuruSys");
  if (GuruSysData) {
    return JSON.parse(GuruSysData);
  }
  return null;
};
