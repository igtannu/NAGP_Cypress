Feature: Login Feature Scenarios

    Login Feature Scenarios will test for diffrent test cases for login file

    Scenario Outline: Login with Valid data
        Given Open browser and URL
        When Enter "<Username>" and "<Password>" for Login
        And Click on "Login" Button
        Then Verify if Login successfully

        Examples:
            | Username | Password |
            | Admin    | admin123 |

    Scenario Outline: Login with InValid data
        Given Open browser and URL
        When Enter "<Username>" and "<Password>" for Login
        And Click on "Login" Button
        Then Verify if Login failed

        Examples:
            | Username | Password  |
            | Admin    | admin@123 |
