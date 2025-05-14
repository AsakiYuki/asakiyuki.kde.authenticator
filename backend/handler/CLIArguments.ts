export class CLIArguments {
    static args: string[] = process.argv;

    static get(index: number): string | undefined {
        return CLIArguments.args[index];
    }

    static getAfterParam(param: string): string | undefined {
        const index = CLIArguments.args.indexOf(param);
        if (index === -1) return undefined;
        return CLIArguments.args[index + 1];
    }

    static includes(...param: string[]): boolean {
        for (const p of param)
            if (CLIArguments.args.includes(p)) return true;
        return false;
    }
}