package org.automation.testing.testcases;

import org.automation.testing.assertions.Compare;
import org.automation.testing.base.DriverInstance;
import org.automation.testing.pages.LoginPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.*;

public class StepDefinition {
    WebDriver driver;
    LoginPage login;
	@Given("^User is on Login$")
	public void user_is_on_Login() throws Throwable {
	    DriverInstance driverinstance = new DriverInstance();
	    driver = driverinstance.generateDriverInstance();
	}

	@When("^User enters username$")
	public void user_enters_username() throws Throwable {
	   login = new LoginPage(driver);
	   login.enterusername("Uname1");
	   
	   
	}

	@When("^User enters password$")
	public void user_enters_password() throws Throwable {
		login.enterpassword("Password");
	}

	@When("^User clicks on Login button$")
	public void user_clicks_on_Login_button() throws Throwable {
		login.clickloginbutton();
	}

	@Then("^User logged in successfully$")
	public void user_logged_in_successfully() throws Throwable {
		Assert.assertFalse(Compare.Validatepageurl(driver,"http:www.facebook.com"));
	    
	}

	@When("^User enters invaid username$")
	public void user_enters_invaid_username() throws Throwable {
		 login = new LoginPage(driver);
		 login.enterusername("Uname1"); 
	}

	@Then("^User should not be logged in$")
	public void user_should_not_be_logged_in() throws Throwable {
		Assert.assertTrue(Compare.Validatepageurl(driver,"http:www.facebook.com"));
	}

}
