import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString, IsBoolean, validateSync } from "class-validator";
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    PrimaryColumn,
} from "typeorm";
import { InternalServerErrorException } from "@nestjs/common";
import { generateUUID } from "../utils";
import { IBase } from "../interfaces";

export abstract class BaseEntity implements IBase {
    @PrimaryColumn()
    @IsString()
    @IsNotEmpty()
    public id!: string;

    @Column({name: "date_modified"})
    @Type(() => Date)
    @IsDate()
    public dateModified?: Date;

    @Column({name: "date_created"})
    @Type(() => Date)
    @IsDate()
    public dateCreated?: Date;

    @Column({name: 'enabled'})
    @IsBoolean()
    public enabled: boolean;

    @BeforeInsert()
    protected doBeforeInsertion(): void {
        this.id = generateUUID();
        this.dateCreated = new Date();
        this.dateModified = this.dateCreated;
        this.enabled = true;

        const errors = validateSync(this, { validationError: { target: false } });
        if (errors.length > 0) {
            throw new InternalServerErrorException(errors);
        }
    }

    @BeforeUpdate()
    protected doBeforeUpdate(): void {
        this.dateModified = new Date();
        const errors = validateSync(this, { validationError: { target: false } });
        if (errors.length > 0) {
            throw new InternalServerErrorException(errors);
        }
    }
}
