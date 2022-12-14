import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'

@Injectable()
export class MapScript {
  constructor(private configService : ConfigService){}
  private script = `
    <script>
      /* 지도 렌더링 */
      // map이라는 변수는 교통 레이어에서 사용
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(36.349599, 127.377555),
        scaleControl: false,
        mapDataControl: false,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT
        },
      })

      /* 마커 띄우기 */
      const traffic = (name, minX, minY, maxX, maxY) => {
        const marker = new naver.maps.Marker({ // 마커 표시
          position: new naver.maps.LatLng(minY, minX),
          map: map,
          clickable: true
        })

        const infoWindow = new naver.maps.InfoWindow() // 팝업 생성자

        naver.maps.Event.addListener(marker, "click", function () { // 팝업 실행
          infoWindow.setContent(getContentElement(minX, minY, "loading"))
          infoWindow.open(map, marker)
          fetch(\`${this.configService.get('FETCH_URL')}/traffic?minX=\${minX}&minY=\${minY}&maxX=\${maxX}&maxY=\${maxY}\`)
            .then(response => response.json())
            .then(data => 
              infoWindow.setContent(getContentElement(minX, minY, data))
            )
        })

        naver.maps.Event.addListener(map, 'click', function () { // 팝업 종료
          infoWindow.close();
        })

        function getContentElement(minX, minY, data) { // 팝업 내용
          return\`
            <div>
              \${name}<br>
              위치: \${minX}, \${minY}<br>
              통행속도: \${data}
            </div>\`
        }
      }
    </script>
  `

  getScript() {
    return this.script
  }
}