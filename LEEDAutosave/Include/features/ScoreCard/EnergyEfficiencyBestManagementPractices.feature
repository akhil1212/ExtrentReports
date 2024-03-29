#Feature: Entering data to Energy Efficiency Best Management Practices - LEED v4.1 O+M: EB
#---------------------------------------------------------------------------------------------------------------------------------
# Authors :                                                                                                                                                          Reviewer    :
# Date   :                                                                                                                                                                   Reviewed On :
# Last Updated By:
# Last Updated On:
# Feature Name:
# Feature Description:
#---------------------------------------------------------------------------------------------------------------------------------
Feature: Entering data to Energy Efficiency Best Management Practices - LEED v4.1 O+M: EB

  @SmokeTest
  Scenario Outline: Filling Energy Efficiency Best Management Practices
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
    When User uploads files to Add file button
    And User Enters data to Narrative field
    And User checks the checkbox option
    And User downloads the uploaded files
    And User deletes the uploaded files
    And User sets the date field
    And User clicks on Save button
    Then User can able to see the form got saved
    And User clicks the Complete icon to set status to Ready for Review

    Examples: 
      | formname                                    |project          | ratingSystem |
      | Energy Efficiency Best Management Practices |BDD6 TestProject | O+M:EB       |

  @RegressionTest
  Scenario Outline: Checking Auto Save functionality in Energy Efficiency Best Management Practices
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
    And User checks the checkbox option
    And User sets the date field
    And User checks the checkbox option
    And User Enters data to Narrative field to check auto save on form <formname> rating <ratingSystem>
    And User uploads files to Add file button to check auto save on form <formname> rating <ratingSystem>
    And User verifies form not saved as draft
    And User Enters data to Narrative field to check auto save on form <formname> rating <ratingSystem>
    And User verifies warning message of form saved as draft
    And User checks form saved as draft
    And User deletes the uploaded files
    And User clears the draft
    And User Enters data to Narrative field after clear draft
    And User clicks on Save button
    Then User can able to see the form got saved
    And User dowloads the form as pdf
    And User verifies the narrative
    And User deletes the downloaded pdf file

    Examples: 
      | formname                                    |project          | ratingSystem |
      | Energy Efficiency Best Management Practices |BDD6 TestProject | O+M:EB       |
