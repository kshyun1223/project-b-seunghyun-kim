# 국가교통정보센터 교통소통정보 API 주요 메서드 모음
``` java
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.io.BufferedReader;
import java.io.IOException;

public class ApiExplorer {
  public static void main(String[] args) throws IOException {
    //* URL
    StringBuilder urlBuilder = new StringBuilder("https://openapi.its.go.kr:9443/trafficInfo")
    
    //* 공개키
    urlBuilder.append("?" + URLEncoder.encode("apiKey", "UTF-8") + "=" + URLEncoder.encode("test", "UTF-8"))

    //* 본선도로구간 id
    urlBuilder.append("&" + URLEncoder.encode("sectionID","UTF-8") + "=" + URLEncoder.encode("1", "UTF-8"))

    //* 노선번호
    urlBuilder.append("&" + URLEncoder.encode("routeNo","UTF-8") + "=" + URLEncoder.encode("1", "UTF-8"))

    //* 예측날짜
    urlBuilder.append("&" + URLEncoder.encode("fCastDate","UTF-8") + "=" + URLEncoder.encode("20201217", "UTF-8"))

    //* 예측시간
    urlBuilder.append("&" + URLEncoder.encode("fCastHour","UTF-8") + "=" + URLEncoder.encode("00", "UTF-8"))

    //* 출력타입
    urlBuilder.append("&" + URLEncoder.encode("getType","UTF-8") + "=" + URLEncoder.encode("xml", "UTF-8"))

    URL url = new URL(urlBuilder.toString())


   
    HttpURLConnection conn = (HttpURLConnection) url.openConnection()
    conn.setRequestMethod("GET") // get 요청
    conn.setRequestProperty("Content-type", "text/xml;charset=UTF-8")
    System.out.println("Response code: " + conn.getResponseCode())
    BufferedReader rd
    if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
     rd = new BufferedReader(new InputStreamReader(conn.getInputStream()))
    } else {
     rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()))
    }
    StringBuilder sb = new StringBuilder()
    String line
    while ((line = rd.readLine()) != null) {
     sb.append(line)
    }
    rd.close()
    conn.disconnect()
    System.out.println(sb.toString())
  }
}
```