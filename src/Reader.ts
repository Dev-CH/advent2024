import * as fs from "fs";

export const Reader = () => {

    const readFile = (name: string) => {
        const buffer = fs.readFileSync(`./src/puzzle/${name}.txt`, 'utf8');

        return buffer;
    }

    const puzzleInput = (day: number) => readFile(day.toString()).split('\n');

    return {
        read: readFile,
        puzzle: puzzleInput,
    }
}