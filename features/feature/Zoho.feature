Feature: The Internet website homepage


@demo
  Scenario Outline: As a user, I should be able to add a product to cart
  Given I open the zoho site
  Then I click on sign in button
  When I sign in using zohoUsername and zohoPassword
  Then I expect zoho homepage should be displayed
  And I expect  Some of our most popular apps header should be displayed
