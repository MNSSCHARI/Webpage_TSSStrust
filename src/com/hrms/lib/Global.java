package com.hrms.lib;

import org.openqa.selenium.WebDriver;

public class Global {
public	WebDriver driver;
// in global package we can create the test data and object elements
	public String url="http://183.82.103.245/nareshit/login.php";
	public String userdata="nareshit";
	public String emfirstdata="Narasimha";
	public String emlastdata="Machavaram";
	public String Sedata="10007";
	
//objects
	public String username="txtUserName";
	public String password="txtPassword";
	public String logbtn="Submit";
	public String frame="rightMenu";
	public String Addbtn="//input[@value='Add']";
	public String Empfirst="txtEmpFirstName";
	public String Emplast="txtEmpLastName";
	public String Savebtn="//input[@id='btnEdit']";
	public String DropV="0";
	public String Emdrop="loc_code";
	public String Emsearch="//input[@id='loc_name']";
	public String Searchbtn="//input[@value='Search']";
	public String Alckbox="allCheck";
	public String Deletebtn="//input[@value='Delete']";
}
