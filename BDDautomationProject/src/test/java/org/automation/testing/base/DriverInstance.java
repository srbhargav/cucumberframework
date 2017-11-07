package org.automation.testing.base;

import java.util.ResourceBundle;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class DriverInstance {
	
	@BeforeClass
	public WebDriver generateDriverInstance(){
		
		WebDriver driver ;
		       ResourceBundle config = ResourceBundle.getBundle("Config");
		       if(config.getString("browser").equalsIgnoreCase("chrome"))
		        {   
		    	    System.setProperty("webdriver.chrome.driver", "./Driver/chromedriver.exe");
		        	driver = new ChromeDriver();
		        	
		        }
		        else if (config.getString("browser").equalsIgnoreCase("firefox"))
		        {
		           System.setProperty("webdriver.gecko.driver", "./Driver/geckodriver.exe");
		           driver = new FirefoxDriver();
		        }
		        else{
		        	 System.setProperty("webdriver.chrome.driver", "./Driver/chromedrive.exe");
			         driver = new ChromeDriver();	
		        }
		       driver.get(config.getString("apllicationurl"));
		       return driver;
				
	}
	
	@AfterClass
	public void Closedriver(WebDriver driver){
     driver.quit();		
		
	}

}
