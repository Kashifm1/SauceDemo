Feature: The Internet website homepage


Background: launch and login into apps
  Given I open the sauceDemo site
    Then I expect the title Swag Labs is displayed
    When I login with valid username and password
    Then I expect the product page is displayed
  
   @demo
  Scenario Outline: As a user, I can open the website
    # Given I open the sauceDemo site
    # Then I expect the title Swag Labs is displayed
    # When I login with valid username and password
    # Then I expect the product page is displayed
    And I expect that add to cart is clickable
    And I click on highest price product
    And I go to cart
    And I click on checkout
    And I enter firstName, lastName, postalCode and click on continue
    And I click on the finish button
    And I expect Thank you for your order! header should be displayed

# @demo
 Scenario Outline: As a user, I can open the website
   And I expect that add to cart is clickable
    And I click on lowest price product
    And I go to cart
    And I click on checkout
    And I enter firstName, lastName, postalCode and click on continue
    And I click on the finish button
    And I expect Thank you for your order! header should be displayed
