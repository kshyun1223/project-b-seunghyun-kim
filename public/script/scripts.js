/* 지도 렌더링 */
// map이라는 변수는 교통 레이어에서 사용
const map = new naver.maps.Map('map', {
  center: new naver.maps.LatLng(37.3595953, 127.1053971),
  scaleControl: false,
  mapDataControl: false,
  zoomControl: true,
  zoomControlOptions: {
    style: naver.maps.ZoomControlStyle.SMALL,
    position: naver.maps.Position.TOP_RIGHT
  },
})


/* 교통 레이어 렌더링 */
// trafficLayer라는 변수는 렌더링에 사용
const trafficLayer = new naver.maps.TrafficLayer({
  interval: 300000
})

naver.maps.Event.once(map, 'init', function () {
  trafficLayer.setMap(map);
})


/* 현위치로 이동 */
const getPosition = () => { // 현위치 정보 획득
  navigator.geolocation.getCurrentPosition(splitPosition)
}

const splitPosition = (position) => { // 위도와 경도로 분리
  showPosition(
    position.coords.latitude,
    position.coords.longitude
  )
}
getPosition()

const showPosition = (let, lng) => { // 이동
  map.setCenter(new naver.maps.LatLng(let, lng));
}