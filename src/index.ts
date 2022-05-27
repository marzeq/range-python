export function* range(start: number, end?: number, step: number = 1) {
    if (end === undefined) {
        end = start
        start = 0
    }

    const rn: number[] = []

    // step can be negative
    if (step > 0)
        for (let i = start; i < end; i += step)
            yield i
    else
        for (let i = start; i > end; i += step)
            yield i

    return rn
}


export default range
