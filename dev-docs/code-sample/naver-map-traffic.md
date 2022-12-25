```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

  <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=xpjr4qacwi&amp;submodules=panorama"></script>

</head>
<body>
  <style type="text/css">
    #wrap .buttons,
    #wrap .checkbox {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1000;
      padding: 5px;
    }

    #wrap .buttons .control-btn {
      margin: 0 5px 5px 0;
    }
  </style>
  <div id="wrap" class="section">
    <div id="map" style="width:100%;height:600px;"></div>
  </div>
  
  <script>
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      scaleControl: false,
      mapDataControl: false,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT
      },
    })

    const trafficLayer = new naver.maps.TrafficLayer({
      interval: 300000
    });


    naver.maps.Event.once(map, 'init', function () {
      trafficLayer.setMap(map);
    });
  </script>

</html>
```