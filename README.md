MQTT.jsを使ってAWS IoT CoreにPub/Subするだけのスクリプトです。

### 実行方法
IoT Coreのモノの証明書をリネームしてcertificatesフォルダに保管し、index.jsを実行してください。  
プライベートキー : private.pem.key  
デバイス証明書 : certificate.pem.crt  
ルートCA証明書 : Amazon-root-CA-1.pem  
```
# コマンドライン引数のAWS IoT Coreのデバイスエンドポイントは読み替えてください
pip install paho-mqtt
node index.js  "xxxxxxxxxx-ats.iot.ap-northeast-1.amazonaws.com"
```