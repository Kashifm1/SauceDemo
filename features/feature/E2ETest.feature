Feature: Search customers

 Scenario Outline: Search external customers
 Given Get list of users from reqres.in
 When As an admin user login to nocommerce site
 When Search user in customer list
 Then verify if all users exist in customers list