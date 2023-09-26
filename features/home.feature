Feature: The Internet website homepage
 @demo
  Scenario Outline: As a user, I can open the website
    Given I open the demo site
     When I log all table elements "//table[@id='table1']/tbody/tr/td"
    # Then I expect that the element "//span[text()='Products']" is diisplayed
    # And I expect that the element "//div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item_description']//button[text()='Add to cart']" is clicked

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |
