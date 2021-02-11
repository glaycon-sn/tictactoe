
function handleGame(size) {
    const arraySize = Math.sqrt(size)
    let conditions = []
    let condtion1 = Array.from({ length: arraySize }, (_, i) => i)
    conditions.push(condtion1)
    let condtion2 = Array.from({ length: arraySize }, (_, i) => i * arraySize + i)
    conditions.push(condtion2)
    let condtion3 = Array.from({ length: arraySize }, (_, i) => i * arraySize)
    conditions.push(condtion3)
    let condtion4 = Array.from({ length: arraySize }, (_, i) => (i * (arraySize - 1)) + (arraySize - 1))
    conditions.push(condtion4)

    return  conditions 
}

export default handleGame