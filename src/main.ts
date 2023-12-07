import { GetInputFromFile } from "./helpers/AocHelpers";


(async () => {
    const days = [
        (await import("./days/day1")).day1,
    ];

    const [_, dayNumber] = process.argv.slice(2);

    if (dayNumber) {
        const name = `day${dayNumber}`;
        const input = GetInputFromFile(`inputs\\${name}.txt`);
        const day = days.find((d) => d.name === name);

        const [taskA, taskB] = day(input);

        console.log(`
            ${name} solution:
                Task A: ${taskA || "NOPE!"}
                Task B: ${taskB || "NOPE!"}
            ------------
        `);

        return;
    }

    for (const day of days) {
        const name = day.name;
        const input = GetInputFromFile(`inputs\\${name}.txt`);
        const [taskA, taskB] = day(input);

        console.log(`
            ${name} solution:
                Task A: ${taskA || "NOPE!"}
                Task B: ${taskB || "NOPE!"}
            ------------
        `);
    }
})();