import { AocFunc } from "../helpers/AocHelpers";

export const day1: AocFunc = (input: string[]): [string, string] => {

    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const numberRegexp = `(?=(${numbers.join("|")}))`;

    const taskA = (): string => {
        return input
            .map((i) => [...i].filter((c) => Number(c)).map((c) => Number(c)))
            .map((c) => [c[0], c[c.length - 1]])
            .map((c) => Number(c.join("")))
            .reduce((p,c) => p + c, 0)
            .toString();
    };

    const taskB = () => {

        return input
            .map((l) => l.replaceAll(new RegExp(numberRegexp, "g"), (_, a) => {
                const n = numbers.indexOf(a).toString();
                return n;
            }))
            .map((i) => [...i].filter((c) => Number(c)).map((c) => Number(c)))
            .map((c) => [c[0], c[c.length - 1]])
            .map((c) => Number(c.join("")))
            .reduce((p,c) => p + c, 0)
            .toString();
    }

    const replaceNumbers = (str) => {

    };

    return [taskA(), taskB()]
};