import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ENV_KEYS, Env } from './env';

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule);
	app.enableCors();

	const configService = app.get<ConfigService<Env, true>>(ConfigService);
	const SERVER_PORT = configService.get(ENV_KEYS.SERVER_PORT, { infer: true });

	return app.listen(SERVER_PORT);
};

bootstrap();
