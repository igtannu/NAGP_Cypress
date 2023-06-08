Feature: API Test for GET and POST

    Scenario Outline: API Test for GET a user
    When I send a "GET" request to "api/users/2" and get response "200"
    