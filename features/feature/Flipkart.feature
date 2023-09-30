Feature: The Internet website homepage

   @demo
  Scenario Outline: As a user, I can open the website
  Given I open the flipkart site
  And I click on cancel popup
  And I expect flipkart home page should be displayed
  When I search iphone14
  And I print all products with price
