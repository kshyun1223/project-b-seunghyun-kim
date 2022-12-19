<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?clientId=orK7_YeBAdN64OJ8HUVz&amp;submodules=panorama"></script>
</head>
<body>
<style type="text/css">
    #wrap .buttons, #wrap .checkbox { position:absolute;top:0;left:0;z-index:1000;padding:5px; }
    #wrap .buttons .control-btn { margin:0 5px 5px 0; }
</style>
<body>
<div id="wrap" class="section">
    <h2>네이버 실시간 교통상황 레이어 표시하기</h2>
    <p>네이버 실시간 교통상황 레이어를 생성하는 예제입니다. 이 예제는 jQuery 구문을 포함하고 있습니다.</p>
    <div id="map" style="width:100%;height:600px;">
        <div class="buttons">
            <input id="traffic" type="button" value="교통상황" class="control-btn" />
        </div>
        <div class="checkbox">
            <input id="autorefresh" type="checkbox" checked="checked" value="1" /><label for="autorefresh">자동 새로고침</label>
        </div>
    </div>
    <code id="snippet" class="snippet"></code>
</div>
<script id="code">
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: naver.maps.MapTypeControlStyle.DROPDOWN
        }
    })

    var trafficLayer = new naver.maps.TrafficLayer({
        interval: 300000 // 5분마다 새로고침 (최소값 5분)
    });

    var btn = $('#traffic');

    naver.maps.Event.addListener(map, 'trafficLayer_changed', function(trafficLayer) {
        if (trafficLayer) {
            btn.addClass('control-on');
            $("#autorefresh").parent().show();
            $("#autorefresh")[0].checked = true;
        } else {
            btn.removeClass('control-on');
            $("#autorefresh").parent().hide();
        }
    });

    btn.on("click", function(e) {
        e.preventDefault();

        if (trafficLayer.getMap()) {
            trafficLayer.setMap(null);
        } else {
            trafficLayer.setMap(map);
        }
    });

    $("#autorefresh").on("click", function(e) {
        var btn = $(this),
            checked = btn.is(":checked");

        if (checked) {
            trafficLayer.startAutoRefresh();
        } else {
            trafficLayer.endAutoRefresh();
        }
    });

    naver.maps.Event.once(map, 'init', function() {
        trafficLayer.setMap(map);
    });
</script>

</body>
</html>
