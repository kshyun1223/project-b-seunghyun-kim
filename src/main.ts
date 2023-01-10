import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigModule } from '@nestjs/config'

async function main() {
  const app = await NestFactory.create(AppModule)

  const env = process.env.NODE_ENV
  const port = process.env.NODE_SERVER_PORT
  const mongoUrl = process.env.MONGO_URL
  const trafficKey = process.env.TRAFFIC_KEY
  const fetchURL = process.env.FETCH_URL

  await app.listen(port)
  console.log(`env:${env}`)
  console.log(`port:${port}`)
  console.log(`mongoUrl:${mongoUrl}`)
  console.log(`trafficKey:${trafficKey}`)
  console.log(`fetchURL:${fetchURL}`)
}
main()