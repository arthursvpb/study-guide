import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';
import { fromZodError } from 'zod-validation-error';

const ERROR = {
	VALIDATION_FAILED: 'Validation failed'
};

export class ZodValidationPipe implements PipeTransform {
	constructor(private schema: ZodSchema) {}

	transform(value: unknown) {
		try {
			this.schema.parse(value);
		} catch (error) {
			if (error instanceof ZodError)
				throw new BadRequestException({
					error: fromZodError(error),
					message: ERROR.VALIDATION_FAILED,
					statusCode: 400
				});

			throw new BadRequestException(ERROR.VALIDATION_FAILED);
		}
		return value;
	}
}
