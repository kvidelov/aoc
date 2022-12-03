import * as fs from 'fs'
import * as path from 'path'

const filePath = path.join(__dirname, 'input.txt')
const input = fs.readFileSync(filePath, { encoding: 'utf-8' }).split('\n')

const findCommonCharacters = (firstHalf: string, secondHalf: string) => {
  const commonChars = []
  firstHalf.split('').forEach((char) => {
    if (secondHalf.includes(char) && !commonChars.includes(char)) {
      commonChars.push(char)
    }
  })
  return commonChars
}

const findCharPriority = (char: string) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const isUpperCase = char === char.toUpperCase()

  const prio = alphabet.indexOf(char.toLowerCase()) + 1
  return isUpperCase ? prio + alphabet.length : prio
}

const findPrioritiesSum = (input: string[]) => {
  let sum = 0
  input.forEach((item: string) => {
    const firstHalf = item.slice(0, item.length / 2)
    const secondHalf = item.slice(item.length / 2)

    const commonChar = findCommonCharacters(firstHalf, secondHalf)[0]
    sum += findCharPriority(commonChar)
  })
  console.log('Sum of priorities:', sum)
}

findPrioritiesSum(input)