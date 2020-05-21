module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement >= 0 && item.enhancement < 20) {
    console.log("increase")
    return item.enhancement + 1;
  } else if (item.enhancement == 20) {
    console.log("changed")
    return item.enhancement
  } else if (item.enhancement < 0 && item.enhancement > 20) {
    console.log("not valid")
    return null
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if (item.enhancement === 100) {
    return item.enhancement
  }
}

function get(item) {
  return { ...item };
}
