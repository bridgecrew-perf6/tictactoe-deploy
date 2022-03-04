export default function checkFill(cells) {
  let flags = true;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === undefined) {
      flags = false;
      return flags;
    }
  }
  return flags;
}
