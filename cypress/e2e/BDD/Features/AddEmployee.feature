Feature:  Add Employee functionality through PIM
    This is Feature for Add new Employee by PIM then add new Employee

    Background:
        Given Open URL then Login to site
    Scenario: Add Employee from PIM Employee List
        When Click on "PIM" menu 
        And Click on "Add" Button
        And Enter firstname and lastname
        And  Toggle on create Login details
        And  Enter password and username
        And  Click on "Save" Button
        Then Verify if save succesfully be on Employee list page
