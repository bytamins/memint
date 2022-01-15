export const dayObject = (obj) => ({
  id: obj.id,
  tokenId: obj.get("tokenId"),
  title: obj.get("title"),
  description: obj.get("description"),
  dayLabel: obj.get("dayLabel"),
  timestamp: obj.get("timestamp"),
});
