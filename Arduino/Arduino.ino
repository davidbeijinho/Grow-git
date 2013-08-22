int analogPin = 3; 
int val = 0; 

void setup()
{
	Serial.begin(9600);
}

void loop()
{
 val = analogRead(analogPin); 
	 Serial.println("A0:"+val);// IMPRIMIR PIN:VALOR
}