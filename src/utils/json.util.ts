import * as xss from "xss";

export class JsonUtil {
	public static sanitize<T>(input: T): T {
        if (!input) {
            return input;
        }

        if (typeof input === "string") {
            return JsonUtil.filterXss(input) as unknown as T;
        } else if (Array.isArray(input)) {
            input.forEach((item, index) => input[index] = JsonUtil.sanitize(item));
        } else if (Object.keys(input).length) {
            Object.keys(input).forEach((key: string) => {
                input[key as keyof T] = JsonUtil.sanitize(input[key as keyof T]);
            });
        }
        return input;
	}
	
	public static filterXss(input: string): string {
		return xss.filterXSS(input);
	}
}