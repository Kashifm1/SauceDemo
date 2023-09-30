Feature: Actitime demo website project creation
@demo
Scenario Outline: Verify the user able to create account and project
Given I go to actitime demo website
Then I expect login page should be displayed
When I login with valid actitime username and password
Then I expect actitime home page should be displayed
And I click on tasks link
And I expect tasks page should be displayed
And I click on new customer
And I expect new customer page should be displayed
And I enter customerName, description, select an option from existing customer and click on create
And I expect customer name should be visible
Then I click on new project
And I enter project name, customer, description, tasks and click on create
And I expect project name should be visible
And I click on logout
And I expect actitime login page should be displayed
