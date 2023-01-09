import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from "@nestjs/config"

async function main() {
  const app = await NestFactory.create(AppModule)
  // NestFactory가 뭐지? 코어 모듈이라는건가?

  const configService = app.get(ConfigService)
  const env = configService.get('NODE_ENV')
  const port = configService.get('NODE_SERVER_PORT')
  const mongoUrl = configService.get('MONGO_URL')
  const trafficKey = configService.get('TRAFFIC_KEY')
  const fetchURL = configService.get('FETCH_URL')

  await app.listen(port)
  console.log(`env:${env}`)
  console.log(`port:${port}`)
  console.log(`mongoUrl:${mongoUrl}`)
  console.log(`trafficKey:${trafficKey}`)
  console.log(`fetchURL:${fetchURL}`)
}
main()