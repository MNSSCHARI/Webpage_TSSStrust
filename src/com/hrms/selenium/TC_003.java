package com.hrms.selenium;

import org.apache.log4j.xml.DOMConfigurator;
import org.testng.annotations.Test;

import com.hrms.lib.General;

public class TC_003 {
	@Test
	public void tc003() throws Exception{
		
//public static void main(String[] args) throws Exception{
		DOMConfigurator.configure("log4j.xml");
	System.out.println("Automation Starts");
	General obj=new General();
	obj.openApp();
	obj.login();
	obj.searchEmp();
	Thread.sleep(2000);
	obj.deleteEm();
	Thread.sleep(2000);
	obj.logout();
	Thread.sleep(2000);
	obj.closeApp();
	
	
}
}
