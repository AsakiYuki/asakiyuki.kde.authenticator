import fs from "fs";

if (!fs.existsSync("data")) fs.mkdirSync("data");

export class DataManager {
    static read(file: string) {
        if (!fs.existsSync(`data/${file}`)) return "";
        return fs.readFileSync(`data/${file}`, "utf-8");
    }

    static write(file: string, data: string) {
        fs.writeFileSync(`data/${file}`, data, "utf-8");
    }

    static readJson(file: string) {
        if (!fs.existsSync(`data/${file}`)) return {};
        return JSON.parse(DataManager.read(file));
    }

    static writeJson(file: string, data: any) {
        DataManager.write(file, JSON.stringify(data));
    }
}