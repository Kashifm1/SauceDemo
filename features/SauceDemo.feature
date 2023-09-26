Feature: The Internet website homepage

  @demo
  Scenario Outline: As a user, I can open the website
    Given I open the sauceDemo site
    Then I expect the title Swag Labs is displayed
    When I login with valid "<username>" and "<password>"
    When I login with valid username and password
    Then I expect the product page is displayed
    And I expect that add to cart is clickable
    And I click on highest price product
    And I go to cart
    And I expect the item is displayed
    And I click on checkout
    And I enter firstName, lastName and postalCode and click on continue
    And I click on the finish button
    And I expect Thank you for your order! header should be displayed

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |
