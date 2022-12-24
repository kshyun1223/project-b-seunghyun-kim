import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import { ConfigService } from "@nestjs/config"

async function main() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  const configService = app.get(ConfigService)
  const port = configService.get('NODE_SERVER_PORT')

  await app.listen(port)
  console.log(`http://localhost:${port}`)
}
main()