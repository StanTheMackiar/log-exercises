//? parqueadero con 20 puestos

//? los primeros 10 en direccion a la entrada
//? los ultimos 10 en direccion a la salida

//? Al principio, los 20 espacios estan ocupados
interface WaitingCar {
  position: number;
  isLocated: boolean;
}


interface ParkingSpot {
  num: number;
  isFull: boolean;
}

interface Params {
  // datasetsNumber?: number,
  waitingPositions: number[],
  vacatedPositions: number[]
}

const parkingLot: number[] = Array.from({length: 20}).map((_, i) => i + 1)

const MAX_POSITION = 20

const getDistance = (vacatedPosition: number, carPosition: number): number => {
  const difference = vacatedPosition - carPosition
  const isBehind = vacatedPosition < carPosition

  const distance = isBehind ? (MAX_POSITION - carPosition) + vacatedPosition : difference

  return distance
}

const hasDuplicates = (array: number[]): boolean => {
  const uniqueElements = new Set(array);
  return uniqueElements.size !== array.length;
};

const validatePositions = (positions: number[]): { isInvalid: boolean } => {
  const containInvalidValues = positions.some(pos => pos <= 0 || pos > MAX_POSITION)
  const containDuplicates = hasDuplicates(positions)

  return {
    isInvalid: containInvalidValues || containDuplicates
  } 
}

const parkingLotAlgorithm = ({ waitingPositions, vacatedPositions }: Params) => {

  const { isInvalid: isInvalidWaiting } = validatePositions(waitingPositions)
  const { isInvalid: isinvalidVacated} = validatePositions(vacatedPositions)

  if(isInvalidWaiting || isinvalidVacated) throw new Error("invalid input")

  let waitingCarPositions: { original: number, current: number }[] = waitingPositions.map(pos => ({ original: pos, current: pos }))
  const results: { initial: number, final: number | null }[] = waitingPositions.map(pos => ({ initial: pos, final: null }));

  for (const vacatedPosition of vacatedPositions) {

    const closestCar = waitingCarPositions.reduce<{ position: number, originalPosition: number, distance: number }>((nearest, carPosition) => {
      const newDistance = getDistance(vacatedPosition, carPosition.current)

      if(newDistance < nearest.distance) return {
        position: carPosition.current,
        originalPosition: carPosition.original,
        distance: newDistance
      }

      return nearest
    }, {
      position: waitingCarPositions[0].current,
      originalPosition: waitingCarPositions[0].original,
      distance: getDistance(vacatedPosition, waitingCarPositions[0].current)
    })

    waitingCarPositions = waitingCarPositions.filter(position => position.current !== closestCar.position)
    waitingCarPositions = waitingCarPositions.map(position => {
      const sum = position.current + closestCar.distance

      return {
        ...position,
        current: sum > MAX_POSITION ? sum - MAX_POSITION : position.current + closestCar.distance
      }
    })

    const resultIndexFound = results.findIndex(result => result.initial === closestCar.originalPosition)
    results[resultIndexFound].final = vacatedPosition
  }

  for (const waitingPosition of waitingPositions) {
    const result = results.find(r => r.initial === waitingPosition)
    if (result?.final) {
      console.log(`Original position ${result.initial} parked in ${result.final}`);
    } else {
      console.log(`Original position ${result?.initial} did not park`);
    }
  }
}


parkingLotAlgorithm({
  waitingPositions: [6, 19, 17, 13, 1],
  vacatedPositions: [1, 3, 20, 16],
})


