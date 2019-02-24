import paho.mqtt.client as mqtt
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

client = mqtt.Client()

client.on_connect = on_connect
client.username_pw_set(username="tym-11",password="7pZjYdO0zV5rnUgn")
client.connect("mqtt.nag-iot.zcu.cz", 8883)

print("jo")
client.loop_forever()