package com.hrms.lib;
//import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By;  
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;

import com.hrms.utility.Log;

public class General extends Global {
//in general class we can store the all re-usability functions/methods..
	
	
	public void openApp() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "A:\\STC\\chromedriver.exe");
//		WebDriver driver=new ChromeDriver();
		driver=new ChromeDriver();
		Thread.sleep(4000);
		driver.get(url);
		Reporter.log("Application Opened");
		Log.info("Open Application");
	}
	public void login() throws Exception{
		driver.findElement(By.name(username)).sendKeys(userdata);
		Thread.sleep(1000);
		driver.findElement(By.name(password)).sendKeys(userdata);
		Thread.sleep(1000);
		driver.findElement(By.name(logbtn)).click();
		Reporter.log("Login Completed");
		Log.info("Login Completed");
	}
	public void searchEmp() throws Exception{
		driver.switchTo().frame(frame);
		Select st=new Select(driver.findElement(By.name(Emdrop)));
		st.selectByValue("0");
		driver.findElement(By.xpath(Emsearch)).sendKeys(Sedata);
		Thread.sleep(1000);
		driver.findElement(By.xpath(Searchbtn)).click();
	}
	public void deleteEm() {
		
		driver.findElement(By.name(Alckbox)).click();
		driver.findElement(By.xpath(Deletebtn)).click();
	}
	public void AddBtn() {
		driver.switchTo().frame(frame);
		driver.findElement(By.xpath(Addbtn)).click();
	}
	
	public void NewEmp() {
		driver.findElement(By.name(Empfirst)).sendKeys(emfirstdata);
		driver.findElement(By.name(Emplast)).sendKeys(emlastdata);
		driver.findElement(By.xpath(Savebtn)).click();
	}
	public void back() {
		driver.findElement(By.xpath("//input[@value='Back']")).click();
		driver.switchTo().defaultContent();
	}
	public void logout() {
		driver.switchTo().defaultContent();
		driver.findElement(By.linkText("Logout")).click();
		Reporter.log("Logout Completed ");
		Log.info("Logout Completed");
	}
	
	public void closeApp() {
		driver.close();
		Reporter.log("Application Closed");
		Log.info("Close Application");
	}
}
