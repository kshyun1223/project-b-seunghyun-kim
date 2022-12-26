import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'

@Injectable()
export class TrafficService {
  constructor(private configService: ConfigService){}
  private key = this.configService.get('TRAFFIC_KEY')
  getTraffic(){
    `https://openapi.its.go.kr:9443/trafficInfo?apiKey=${this.key}5e46661666e34f9bbc8e751384787382&type=all&minX=127.3719135&minY=36.33395949&maxX=127.3796322&maxY=36.36467214`
    /* fetch(`http://localhost:3000/traffic?minX=${minX}&minY=${minY}&maxX=${maxX}&maxY=${maxY}`)
        .then((response) => response.json())
        .then((data) => infoWindow.setContent(getContentElement(minX, minY, data))) */
  }
}



