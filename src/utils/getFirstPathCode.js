export function getStrTimesIndex(str, cha, num) {
  let x = str.indexOf(cha);

  for (let i = 0; i < num; i++) {
    x = str.indexOf(cha, x + 1);
  }

  return x;
}

export function getFirstPathCode(path) {
  const index0 = getStrTimesIndex(path, "/admin", 0);
  const index1 = getStrTimesIndex(path, "/admin", 1);

  const activeKey = path.slice(index0 + 1, index1 > 0 ? index1 : path.length);

  return activeKey;
}
