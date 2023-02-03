set projectLocation=A:\STC\Selenium\framWrks
cd %projectLocation%
set classpath=%projectLocation%\bin;%projectLocation%\lib\*
java org.testng.TestNG %projectLocation%\Test2.xml