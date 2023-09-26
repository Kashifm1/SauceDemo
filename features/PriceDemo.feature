Feature: The Internet website homepage

  Scenario Outline: As a user, I can open the website
    Given I open the site
    When I login with "<username>" and "<password>"
    Then I expect that element "//span[text()='Products']" is displayed
    And I store price of elements "//div[@class='inventory_item_price']"

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |
