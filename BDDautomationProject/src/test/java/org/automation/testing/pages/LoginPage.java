package org.automation.testing.pages;

import java.util.ResourceBundle;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {
	
	ResourceBundle element;
	WebDriver driver;
	
	public LoginPage(WebDriver driver){
		   this.driver = driver;
           element = ResourceBundle.getBundle("elements");
	}
	
	public void enterusername( String uname){
		driver.findElement(By.id(element.getString("login_username_id"))).sendKeys("uname");
	}
	
	public void enterpassword(String pass){
		driver.findElement(By.id(element.getString("login_password_id"))).sendKeys("pass");
	
	}

	public void clickloginbutton(){
		driver.findElement(By.xpath(element.getString("login_button_xpath"))).click();
		
	}
}
