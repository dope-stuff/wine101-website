export const splitArray = (arr: string[]): string[][] => {
  return arr.reduce((acc, curr, index) => {
    if (index % 4 === 0) {
      acc.push(arr.slice(index, index + 4))
    }
    return acc
  }, [] as string[][])
}
