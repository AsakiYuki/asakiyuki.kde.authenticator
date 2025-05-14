interface Command {
    [cmd: string]: (...args: string[]) => void
}

export const cmd: Command = {};