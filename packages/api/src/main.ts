import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ENV_KEYS, Env } from './env';

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule);
	app.enableCors();

	const configService = app.get<ConfigService<Env, true>>(ConfigService);
	const PORT = configService.get(ENV_KEYS.PORT, { infer: true });

	return app.listen(PORT);
};

bootstrap();
