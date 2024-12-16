export function getLimitAndOffset(page: string = "0") {
  const limit = 12;
  const pageNumber = toInt(page);
  const offset = limit * pageNumber;

  return {
    limit,
    offset,
  };
}

function toInt(value: string) {
  const result = parseInt(value, 10);
  return isNaN(result) ? 0 : result;
}
