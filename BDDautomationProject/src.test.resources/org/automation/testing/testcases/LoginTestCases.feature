#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios 
#<> (placeholder)
#""
## (Comments)

#Sample Feature Definition Template

Feature: Facebook Login Functionality


Scenario: Login with Valid Credentials
Given User is on Login
When User enters username
	And User enters password
	And User clicks on Login button
Then User logged in successfully


Scenario: Login with Invalid Credentials
Given User is on Login
When User enters invaid username
	And User enters password
	And User clicks on Login button
Then User should not be logged in

