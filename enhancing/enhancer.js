module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// function succeed(item) {
//   if (item.enhancement >= 0 && item.enhancement < 20) {
//     console.log("increase")
//     return item.enhancement + 1;
//   } else if (item.enhancement == 20) {
//     console.log("changed")
//     return item.enhancement
//   } else if (item.enhancement < 0 && item.enhancement > 20) {
//     console.log("not valid")
//     return null
//   }
// }

function succeed(item) {
  if (item.enhancement < 20 ) {
    let enhanced = ++item.enhancement
    return {...item, enhancement: enhanced}
  } else {
    return {...item, enhancement: 20}
  }
}

function fail(item) {
  let durable
  let enhance
  if (item.enhancement < 15 ) {
    durable = item.durability - 5
    return {...item, durability: durable}
  } else if (item.enhancement >= 15) {
    durable = item.durability - 10
      if(item.enhancement > 16) {
        enhance = item.enhancement - 1
        return {...item, durability: durable, enhancement: enhance}
      }
      return {...item, durability: durable}
  } 
}

// If the item's enhancement is less than 15, the durability of the item is decreased by 5.

function repair(item) {
  if (item.enhancement === 100) {
    return item.enhancement
  }
}

function get(item) {
  return { ...item };
}
