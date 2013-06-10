## Server ##

	java -jar .\lib\JsTestDriver-1.3.5.jar --port 9876 --browser "C:\Program Files (x86)\Mozilla Firefox\firefox.exe"

## Tester ##

	java -jar .\lib\JsTestDriver-1.3.5.jar --config .\jsTestDriver1.conf --server http://localhost:9876 --tests all

## strict mode ##

Strictmode eseten bele kell nyulni a js fajlokba, maskulonben elhasalnak.