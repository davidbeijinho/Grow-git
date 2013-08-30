const int analogInPin = A0;

String escrever,sensor,probe;

int sensorValue = 0;

void setup() 
{
  Serial.begin(9600); 
}

void loop() 
{

  sensorValue = analogRead(analogInPin);            
  sensor="A0:";
  probe="P1:";
  escrever=probe+sensor+String(sensorValue);
  
  Serial.println(escrever);      
 
  delay(2);                     
}
