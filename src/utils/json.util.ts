import * as xss from "xss";

export class JsonUtils {
	public static sanitize<T>(input: T): T {
        if (!input) {
            return input;
        }

        if (typeof input === "string") {
            return this.filterXss(input) as unknown as T;
        } else if (Array.isArray(input)) {
            input.forEach((item, index) => input[index] = this.sanitize(item));
        } else if (Object.keys(input).length) {
            Object.keys(input).forEach((key: string) => {
                input[key as keyof T] = this.sanitize(input[key as keyof T]);
            });
        }
        return input;
	}
	
	public static filterXss(input: string): string {
		return xss.filterXSS(input);
	}
}