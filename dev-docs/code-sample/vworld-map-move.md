```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <script type="text/javascript" src="http://map.vworld.kr/js/vworldMapInit.js.do?version=2.0&apiKey=8462EC19-BC85-35E0-9EE4-7ACF82220E5D"></script>
</head>
<body>
  <div id="vmap" style="width:100%;height:370px;left:0px;top:0px"></div>
  <script>
    vw.ol3.MapOptions = {
      basemapType: vw.ol3.BasemapType.GRAPHIC,
      controlDensity: vw.ol3.DensityType.EMPTY,
      interactionDensity: vw.ol3.DensityType.BASIC,
      controlsAutoArrange: true,
      homePosition: vw.ol3.CameraPosition,
      initPosition: vw.ol3.CameraPosition
    };

    const vmap = new vw.ol3.Map("vmap", vw.ol3.MapOptions);

    function move(x,y,z){
      var _center = [ x, y ];
      var z = z;
      var pan = ol.animation.pan({
        duration : 2000,
        source : (vmap.getView().getCenter())
      });
      vmap.beforeRender(pan);
      vmap.getView().setCenter(_center);
      setTimeout("fnMoveZoom()", 3000);
    }
    
    function fnMoveZoom() {
      zoom = vmap.getView().getZoom();
      if (16 > zoom) {
        vmap.getView().setZoom(14);
      }
    };
  </script>
</body>
</html>
```