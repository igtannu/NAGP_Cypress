Feature: Recruitment functionalities features

    With this feature we test diffrent functionalities for Recruitment and get hired Employee

    Background:
        Given Open URL then Login to site

    Scenario Outline: Add Candidate in Recruitment and Hired him
    When Click on "Recruitment" menu
    And  Click on "Add" Button 
    And Enter firstname and lastname 
    And Choose Vacany and enter mailId
    And Enter phone no and choose Resume
    And Click on "Save" Button
    Then Verify if status is "Status: Application Initiated"
    And Click on "Shortlist" Button
    And Click on save Button
    And Verify if status is "Status: Shortlisted"
    And Click on "Schedule Interview" Button
    And Enter "Asscoiate" Interview title
    And Enter Interviewer name and choose
    And Choose date
    And Click on "Save" Button
    And Verify if status is "Status: Interview Scheduled" 
    And Click on "Mark Interview Passed" Button
    And Click on save Button
    And Verify if status is "Status: Interview Passed"
    And Click on "Offer Job" Button
    And Click on save Button
    And Verify if status is "Status: Job Offered" 
    And Click on "Hire" Button
    And Click on save Button
    Then Verify if status is "Status: Hired" 







