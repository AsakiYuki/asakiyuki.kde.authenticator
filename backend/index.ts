import { socketUrl } from "./src/app";

if (!socketUrl) {
    console.error("Please provide a socket url");
    process.exit(1);
}
