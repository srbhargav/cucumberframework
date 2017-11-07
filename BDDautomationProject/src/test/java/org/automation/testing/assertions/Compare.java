package org.automation.testing.assertions;

import org.openqa.selenium.WebDriver;

public class Compare {

	public static boolean Validatepageurl(WebDriver driver, String ExpectedRes)
	{
		boolean result=false;
		if (driver.getCurrentUrl().equalsIgnoreCase(ExpectedRes))
		{
			result = true;
		}
		return result;
	}
}
