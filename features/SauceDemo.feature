Feature: The Internet website homepage

  # @demo
  Scenario Outline: As a user, I can open the website
    Given I open the sauceDemo site
    Then I expect the title "//div/div/div[contains(.,'Swag Labs')]" is displayed
    When I login with "<username>" and "<password>"
    Then I expect that the element "//span[text()='Products']" is displayed
    And I expect that add to cart is clicked
    And I go to "//a[@class='shopping_cart_link']" and check the item "//div/a/div[contains(.,'Sauce Labs Backpack')]" is displayed
    Then I click on checkout
    And I enter firstName, lastName and postalCode and click on continue
    Then I click on the "#finish" button

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |
