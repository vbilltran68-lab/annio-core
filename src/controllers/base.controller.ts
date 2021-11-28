import { Logger } from "@nestjs/common";
import { ResponseDto } from "../dto";

export class BaseController {
    protected logger: Logger = null;

    constructor(controllerName: string) {
        this.logger = new Logger(controllerName);
    }

    async ApiResponse(code: number, message: string, resultFn?: () => any) {
        try {
            const result = !!resultFn ? await resultFn() : null;
            return new ResponseDto(code, message, result);
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
}
