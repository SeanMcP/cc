export function range(start, end) {
    const output = []
    if (start > 0 && end > start) {
        for (let i = start; i <= end; i++) {
            output.push(i)
        }
    }
    return output
}