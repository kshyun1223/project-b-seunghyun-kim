import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from "@nestjs/config"

async function main() {
  const app = await NestFactory.create(AppModule)
  // NestFactory가 뭐지? 코어 모듈이라는건가?

  const configService = app.get(ConfigService)
  const port = configService.get('NODE_SERVER_PORT')

  await app.listen(port)
  console.log(`port:${port}`)
}
main()