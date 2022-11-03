function main() {
    const input = [15, 12, 16]
    let sum = 0
    for (let i = 0; i < input.length; i++) {
      sum += Number(input[i])
    }

    const max = sum / input.length

    for (let i = 0; i < input.length; i++) {
      if (input[i] > max) {
        console.log(i + 1)
      }
    }
  }
  main()