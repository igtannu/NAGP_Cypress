Feature: Sumit TimeSheet fucntioality

    Background:
        Given Open URL then Login to site
    
    Scenario: From Dhashborad then submit timesheet
    When Click on MytimeSheet
    And Click on "Submit" Button
    And Click on "Save" Button
    And Verify if status is "Status: Submitted" 
