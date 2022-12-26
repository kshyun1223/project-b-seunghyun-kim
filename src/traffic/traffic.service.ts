import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'

@Injectable()
export class TrafficService {
  constructor(private configService: ConfigService){}
  private key = this.configService.get('TRAFFIC_KEY')
  getTraffic(minX, minY, maxX, maxY){
    fetch(`https://openapi.its.go.kr:9443/trafficInfo?apiKey=${this.key}&type=all&minX=${minX}&minY=${minY}&maxX=${maxX}&maxY=${maxY}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }
}



