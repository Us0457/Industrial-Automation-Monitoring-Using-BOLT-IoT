import conf
from boltiot import Sms, Bolt
import json, time

mybolt = Bolt(conf.API_KEY, conf.DEVICE_ID)
sms = Sms(conf.SID, conf.AUTH_TOKEN, conf.TO_NUMBER, conf.FROM_NUMBER)


while True:
    print ("Reading sensor value")
    response = mybolt.digitalRead('0')
    data = json.loads(response)
    print("Sensor value is: " + str(data['value']))
    try:
        sensor_value = int(data['value'])
        if sensor_value == 0 :
            print("Making request to Twilio to send a SMS")
            response = sms.send_sms(" Sir Alert, Someone is near the Room. Approve them if you want https://nostalgic-kirch-a9a170.netlify.app/ ")
            print("Response received from Twilio is: " + str(response))
            print("Status of SMS at Twilio is :" + str(response.status))
    except Exception as e:
        print ("Error occured: Below are the details")
        print (e)
time.sleep(1)


