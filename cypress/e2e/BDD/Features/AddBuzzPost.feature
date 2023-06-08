Feature: Add Buzz Post 

    create Buzz post and and put image

    Background:
        Given Open URL then Login to site

    Scenario: Create Buzz Post
    When Click on "Buzz" menu
    And Click on "Share Photos" Button
    And Enter text and upload image
    And Click on Share Button for buzz
    Then Verify if post uploaded


    