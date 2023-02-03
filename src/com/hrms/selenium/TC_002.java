package com.hrms.selenium;

import org.apache.log4j.xml.DOMConfigurator;
import org.testng.annotations.Test;

import com.hrms.lib.General;

public class TC_002 {
	@Test
	public void tc002() throws Exception{
//public static void main(String[] args) throws Exception {
		DOMConfigurator.configure("log4j.xml");

	System.out.println("Automation Starts");
	// to access the methods wee need to create the object ......create the object where the methods are present
General obj=new General();
obj.openApp();
Thread.sleep(2000);
obj.login();
Thread.sleep(2000);
obj.AddBtn();
Thread.sleep(2000);
obj.NewEmp();
Thread.sleep(2000);
obj.back();
Thread.sleep(2000);
obj.logout();
Thread.sleep(2000);
obj.closeApp();


}
}
