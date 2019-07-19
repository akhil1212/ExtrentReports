Feature: Entering data to Fundamental Refrigerant Management form

  Scenario Outline: Checking Auto Save functionality in Light Pollution Reduction form for Fixture Shielding 
    Given User should be on form <formname>
    When User will select the Radio Button
    And User checks the checkbox option
    And User uploads files to Add file button to check auto save 
    And User verifies form not saved as draft
    And User enters data to text box with number
    And User Enters data to Narrative field to check auto save on form <formname>
    And User verifies warning message of form saved as draft
    And User checks form saved as draft
    And User deletes the uploaded files
    And User clears the draft
    And User Enters data to Narrative field after clear draft
    And User clicks on Save button
    Then User can able to see the form got saved
    And User dowloads the form as pdf
    And User verifies the narrative
    And User verifies text with pdf
    And User deletes the downloaded pdf file
    And User clicks the Complete icon to set status to Ready for Review

    Examples: 
      | formname                                   |
      | Light Pollution Reduction-fixtureShielding |

  Scenario Outline: Checking Auto Save functionality in Light Pollution Reduction form for Perimeter Measurements
    Given User should be on form <formname>
    When User will select the Radio Button
    And User fills the table <tableName> with data <testData> isAddRow <isAddRow>
    And User uploads files to Add file button to check auto save on form <formname>
    And User verifies form not saved as draft
    And User enters data to text box with number
    And User Enters data to Narrative field to check auto save
    And User verifies warning message of form saved as draft
    And User checks form saved as draft
    And User deletes the uploaded files
    And User clears the draft
    And User Enters data to Narrative field after clear draft
    And User clicks on Save button
    Then User can able to see the form got saved
    And User dowloads the form as pdf
    And User verifies the tables
    And User verifies the narrative
    And User verifies text with pdf
    And User deletes the downloaded pdf file
    And User clicks the Complete icon to set status to Ready for Review

    Examples: 
      | formname                                        | tableName                         | testData                    | isAddRow |
      | Light Pollution Reduction-perimeterMeasurements | Table: Site lighting measurements | TD_SiteLightingMeasurements | Yes      |
