/*

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/**
 * ### Challenge `getName`
 * Example ✅
 * 
 * @instructions
 * Must return input object's `name` property.
 *
 * Sample data expected output: `Luke Skywalker`
*/
function getName(character) {
  return character.name
}

/**
 * ### Challenge `getFilmCount`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Must return the number of elements in the `films` property.
 *
 * Sample data expected output: 5
 */
function getFilmCount(character) {
  return character.films.length;

}

/**
 * ### Challenge `getSecondStarshipName`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return second starship's name from `starships` property.
 * If length is 0. Return 'none'
*/
function getSecondStarshipName(character) {
  let ship = character.starships[1]
  if (ship == null) {
    return 'none';
  }
  else {
    return ship.name;
  }
}

/**
 * ### Challenge `getSummary`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Combine specified field values and return them in the following string format:
 *    Template: `{name}, {height}cm, {mass}kg. Featured in {film count} films.`
 *    Result: `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
 */
function getSummary(character) {
  return `${character.name}, ${character.height}cm, ${character.mass}kg. Featured in ${getFilmCount(character)} films.`
}

/**
 * ### Challenge `getVehiclesCostInCreditsSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the total cost in credits for all vehicles defined on the input character.
 * Sample data expected output: 8000
*/
function getVehiclesCostInCreditsSumTotal(character) {
  const vehicles = character.vehicles;
  let totalWeight = vehicles.reduce((total, car) => {
    return total += car.cost_in_credits;
  }, 0)
  return totalWeight;
}

/**
 * ### Challenge `getStarshipPassengerAndCrewSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the number of crew and passenger spots for all starships defined on the
 * input character.
 *
 * Sample data expected output: 27
*/
function getStarshipPassengerAndCrewSumTotal(character) {
  const ships = character.starships;
  let totalRoom = ships.reduce((total, ship) => {
    return total += (ship.crew + ship.passengers);
  }, 0);
  return totalRoom;
}

/**
 * ### Challenge `getNthFilm`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return the Nth `films` value (in this case title).
 * Rules: filmNumber starts at 1 and refers to the *first* film, and includes only the range 1-3.
 * Any numbers outside that range should throw an error.
 * The Error must mention the name of your favorite _extra cheesy_ movie.
 *
 * Given film #1, expected output: `A New Hope`
 * Given film #7, expected error: `There are only 3 Star Wars movies. Flan fiction excluded.`
*/
function getNthFilm(character, filmNumber) {
  if (filmNumber < 4 && filmNumber > 0) {
    return character.films[filmNumber-1];
  }
  else {
    return `There are only 3 Star Wars movies. Fan fiction excluded.`
  }
}

/**
 * ### Challenge `getCargoCapacityTotal`
 * Stretch Goal 💪
 * 
 * @instructions
 * Sum the total cargo capacity for *all* vehicles and starships.
 * Some objects may not have a value for their cargo capacity.
 *
 * Sample data expected output: 80124
*/
function getCargoCapacityTotal(character) {
  const vehicles = character.vehicles;
  let vehicleCargo = vehicles.reduce((total, vehicle) => {
    if (vehicle.cargo_capacity != null) {
      total += parseInt(vehicle.cargo_capacity);
    }
    return total;
  }, 0);

  const starships = character.starships;
  let starshipCargo = starships.reduce((total, starship) => {
    if (starship.cargo_capacity != null) {
      total += parseInt(starship.cargo_capacity);
    }
    return total;
  }, 0);

  return vehicleCargo + starshipCargo;
}

/**
 * ### Challenge `getFastestStarshipName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Find the fastest starship (by atmospheric speed.)
 * Determine the correct field to compare, and return the name of the fastest.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `X-wing`
*/
function getFastestStarshipName(character) {
  const starships = character.starships;
  if (starships.length == 0) {
    return 'none';
  }
  else {
    let fastestShip = starships[0];
    for (let i = 0; i < starships.length; i++) {
      let currentFastest = parseInt(fastestShip.max_atmosphering_speed);
      let testShip = parseInt(starships[i].max_atmosphering_speed);
      if (currentFastest < testShip) {
        fastestShip = starships[i];
      }
    }
    return fastestShip.name;
  }
}

/**
 * ### Challenge `getLargestCargoStarshipModelName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Determine the starship with the largest cargo capacity.
 * Return it's **_model_** property.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `Lambda-class T-4a shuttle`
*/
function getLargestCargoStarshipModelName(character) {
  const starships = character.starships;
  if (starships.length == 0) {
    return 'none';
  }
  else {
    let largestCargo = starships[0];
    for (let i = 0; i < starships.length; i++) {
      let currentLargest = parseInt(largestCargo.cargo_capacity);
      let testShip = parseInt(starships[i].cargo_capacity);
      if (currentLargest < testShip) {
        largestCargo = starships[i];
      }
    }
    return largestCargo.model;
  }
}

/**
 * ### Challenge `getSlowestVehicleOrStarshipName`
 *Stretch Goal 💪
 *
 * @instructions
 * Find the slowest transport (including vehicles and starships)
 * based on `max_atmosphering_speed`, and return its name.
 * If the character does not have any starships or vehicles, then return string 'none'.
 *
*/
function getSlowestVehicleOrStarshipName(character) {
  const vehicles = character.vehicles;
  const starships = character.starships;
  const allTransport = vehicles.concat(starships);

  if (allTransport == 0) {
    return 'none';
  }
  else {
    let slowest = allTransport[0];
    for (let i = 0; i < allTransport.length; i++) {
      let currentSlow = parseInt(slowest.max_atmosphering_speed);
      let challenger = parseInt(allTransport[i].max_atmosphering_speed);
      if (currentSlow > challenger) {
        slowest = allTransport[i];
      }
    }
    return slowest.name;
  }
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
// DO NOT CHANGE ANYTHING BELOW THIS LINE //
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (getName) { module.exports.getName = getName }
  if (getFilmCount) { module.exports.getFilmCount = getFilmCount }
  if (getSecondStarshipName) { module.exports.getSecondStarshipName = getSecondStarshipName }
  if (getSummary) { module.exports.getSummary = getSummary }
  if (getVehiclesCostInCreditsSumTotal) { module.exports.getVehiclesCostInCreditsSumTotal = getVehiclesCostInCreditsSumTotal }
  if (getStarshipPassengerAndCrewSumTotal) { module.exports.getStarshipPassengerAndCrewSumTotal = getStarshipPassengerAndCrewSumTotal }
  if (getNthFilm) { module.exports.getNthFilm = getNthFilm }
  if (getCargoCapacityTotal) { module.exports.getCargoCapacityTotal = getCargoCapacityTotal }
  if (getFastestStarshipName) { module.exports.getFastestStarshipName = getFastestStarshipName }
  if (getLargestCargoStarshipModelName) { module.exports.getLargestCargoStarshipModelName = getLargestCargoStarshipModelName }
  if (getSlowestVehicleOrStarshipName) { module.exports.getSlowestVehicleOrStarshipName = getSlowestVehicleOrStarshipName }
}
