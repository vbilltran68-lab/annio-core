import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsDefined } from "class-validator";

export class ResponseDto<T> {
    @ApiProperty({ type: Number })
    @IsNotEmpty()
    public code: number;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    public message: string;

    @ApiProperty()
    @IsDefined()
    public data: T;

    constructor(code: number, message: string, data: T) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
}