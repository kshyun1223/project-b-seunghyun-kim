```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
  <title></title>
  <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=xpjr4qacwi"></script>
</head>
<body>
<div id="map" style="width:400px; height:400px"></div>

<!-- 
* naver.maps.Map 객체의 매개변수로 지도 요소가 들어간다. 첫번째는 ID이고, 두번째는 옵션인듯.
* new naver.maps.Map(document.getElementById('map')/* , 옵션 */)
-->
<script>
// geolocation 객체는 NCP 꺼가 아니라 웹 표준이다
navigator.geolocation.getCurrentPosition(showPosition)

// 전역변수 그만 사용하고 콜백으로 넘기는 방법좀 익숙해지자
function showPosition (position) { 
  loadMap(position.coords.latitude,
  position.coords.longitude)
  
  console.log(position.coords.latitude,
  position.coords.longitude)
}

const loadMap = (lat, lng) => {
  map = new naver.maps.Map('map',{
    center: new naver.maps.LatLng(lat, lng), //좌표
    /* zoom: zoom, //지도의 초기 줌 레벨
    minZoom: 1, //지도의 최소 줌 레벨
    draggable: true,
    pinchZoom: true,
    scrollWheel: true,
    disableKineticPan: false, // 관성드래깅
    scaleControl: false, // 스케일 컨트롤러
    logoControl: true, // 로고 컨트롤러
    logoControlOptions: {
        position: naver.maps.Position.BOTTOM_RIGHT
    },
    mapDataControl: false, 
    zoomControl: true, //줌컨트롤러
    zoomControlOptions: {
        position: naver.maps.Position.TOP_LEFT
    },
    mapTypeControl: false */
  });
}
</script>
</body>
</html>
```
