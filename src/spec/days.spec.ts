import { AocFunc, GetInputFromFile } from "../helpers/AocHelpers";

describe("AOC Days", () => {
    let days: AocFunc[];

    beforeAll(async () => {
        days = [
            (await import("../days/day1")).day1,
        ];
    });

    it("solves day 1", async () => {
        const input = GetInputFromFile(`inputs\\day1.txt`);
        const [taskA, taskB] = days[0](input);

        console.log({taskA, taskB});

        expect(taskA).toBe("54597");
        expect(taskB).toBe("54504");
    });
});