$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("org/automation/testing/testcases/LoginTestCases.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Facebook Login Functionality",
  "description": "",
  "id": "facebook-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 24,
  "name": "Login with Valid Credentials",
  "description": "",
  "id": "facebook-login-functionality;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User is on Login",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User enters username",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_Login()"
});
formatter.result({
  "duration": 5673644594,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_username()"
});
formatter.result({
  "duration": 813100049,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_password()"
});
formatter.result({
  "duration": 102895627,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 1285008022,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_logged_in_successfully()"
});
formatter.result({
  "duration": 13477193,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Login with Invalid Credentials",
  "description": "",
  "id": "facebook-login-functionality;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "User is on Login",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User enters invaid username",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User should not be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_Login()"
});
formatter.result({
  "duration": 4349037753,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_invaid_username()"
});
formatter.result({
  "duration": 882591943,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_password()"
});
formatter.result({
  "duration": 147585717,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 657824008,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027u_0_2\u0027]\"}\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027E4ML18197\u0027, ip: \u0027192.168.2.3\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.29.461591 (62ebf098771772..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 61.0.3163.100, webStorageEnabled: true}\nSession ID: e5d8a654d4041ffa1bf48fa73b6dd7f0\n*** Element info: {Using\u003dxpath, value\u003d.//*[@id\u003d\u0027u_0_2\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.automation.testing.pages.LoginPage.clickloginbutton(LoginPage.java:28)\r\n\tat org.automation.testing.testcases.StepDefinition.user_clicks_on_Login_button(StepDefinition.java:35)\r\n\tat ✽.And User clicks on Login button(org/automation/testing/testcases/LoginTestCases.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_should_not_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
});