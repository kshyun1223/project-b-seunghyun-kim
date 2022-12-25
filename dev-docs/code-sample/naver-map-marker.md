```javascript
/* 마커 표시 */
const traffic = (name, let, lng) => {
  const marker = new naver.maps.Marker({ // 마커 표시
    position: new naver.maps.LatLng(let, lng),
    map: map,
    clickable: true
  })

  const infoWindow = new naver.maps.InfoWindow() // 팝업 생성자
  
  naver.maps.Event.addListener(marker, "click", function () { // 팝업 실행
    infoWindow.setContent(getContentElement(let, lng));
    infoWindow.open(map, marker);
  })

  naver.maps.Event.addListener(map, 'click', function () { // 팝업 종료
    infoWindow.close();
  })

  function getContentElement(let, lng) { // 팝업 내용
    return '<div>' + name + '<br>' + let + '<br>' + lng + '</div>'
  }
}

traffic('울라울라', 35.5084908, 126.2486436)
```