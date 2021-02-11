import handleGame from './handleGame.js'

export default function handleVictory(data, cells, action, name1, name2) {
    const payload = handleGame(cells)
    let xArray = []
    let oArray = []

    data.forEach((infos, i) =>
        infos === 'x' ? xArray.push(i) : infos === 'o' ? oArray.push(i) : null
    )

    const compareArrays = (array2, array1) => {
        return Array.isArray(array1) &&
            Array.isArray(array2) &&
            array1.length === array2.length &&
            array1.every((v, index) => v === array2[index]) ||
            array2.every((v, index) => v === array1[index] - array1[0])
    }

    const compareArrays2 = (array2, array1) => {
        return Array.isArray(array1) && Array.isArray(array2) &&
            array1.length >= array2.length &&
            array2.every(element => array1.indexOf(element) > -1) ||
            array2.every((v, index) => v === array1[index] - array1[0])
    }

    for (let i = 0; i < payload.length; i++) {
        if (compareArrays(payload[i], xArray)) {
            action(name1)
            return true
        }
        else if (compareArrays2(payload[i], xArray)) {
            action(name1)
            return true
        } else if (compareArrays(payload[i], oArray)) {
            action(name2)
            return true
        }
        else if (compareArrays2(payload[i], oArray)) {
            action(name2)
            return true
        }
    }


    return false
}