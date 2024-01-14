const fs = require("node:fs");
const mqtt = require("mqtt");

// 参考 : Use AWS IoT Core MQTT broker with standard MQTT libraries
// https://aws.amazon.com/jp/blogs/iot/use-aws-iot-core-mqtt-broker-with-standard-mqtt-libraries/
const endpoint = process.argv[2];

const client = mqtt.connect(
  'mqtts://' + endpoint + ':8883',
  {
    clientId: "MyPC",
    key: fs.readFileSync("certificates/private.pem.key"),
    cert: fs.readFileSync("certificates/certificate.pem.crt"),
    ca: [fs.readFileSync("certificates/AmazonRootCA1.pem")],
    protocolId: 'MQTT',
    protocolVersion: 5
  }
)

client.on('connect', () => {
  client.subscribe("MyPC/test-topic", (err) => {
    if (!err) {
      console.log("Connected");
    }
  });
});

client.on('message', (topic, message) => {
  console.log("Received " + topic + " " + message.toString());
});

setInterval(() => {
  client.publish("MyPC/test-topic", "{\"message\":\"Hello from MyPC MQTT.js\"}");
}, 1000);
