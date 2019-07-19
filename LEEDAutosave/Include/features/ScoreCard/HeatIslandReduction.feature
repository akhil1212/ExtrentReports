#Feature: Entering data to Heat Island Reduction - LEED v4.1 O+M: EB
#---------------------------------------------------------------------------------------------------------------------------------
# Authors :                                                                                                                                                          Reviewer    :
# Date   :                                                                                                                                                                   Reviewed On :
# Last Updated By:
# Last Updated On:
# Feature Name:
# Feature Description:
#---------------------------------------------------------------------------------------------------------------------------------
Feature: Entering data to Heat Island Reduction - LEED v4.1 O+M: EB

  @SmokeTest
  Scenario Outline: Filling Heat Island Reduction form for Contributing nonroof measures
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
    When User uploads files to Add file button
    And User fills the table <tableName> with data <testData> isAddRow <isAddRow>
    And User fills the table <tableName1> with data <testData1> isAddRow <isAddRow1>
    And User fills the table <tableName2> with data <testData2> isAddRow <isAddRow2>
    And User fills the table <tableName3> with data <testData3> isAddRow <isAddRow3>
    And User Enters data to Narrative field
    And User enters data to text box with number
    And User checks the checkbox option
    And User downloads the uploaded files
    And User deletes the uploaded files
    And User clicks on Save button
    Then User can able to see the form got saved
    And User clicks the Complete icon to set status to Ready for Review

    Examples: 
      | formname              | project          | ratingSystem | tableName                            | testData                         | isAddRow | tableName1                                | testData1                             | isAddRow1 | tableName2     | testData2  | isAddRow2 | tableName3                         | testData3                      | isAddRow3 |
      | Heat Island Reduction | BDD6 TestProject | O+M:EB       | Table: Contributing nonroof measures | TD_Contributing nonroof measures | No       | Table: Contributing high-reflectance roof | TD_Contributing high-reflectance roof | Yes       | Table: Parking | TD_Parking | No        | Table: Summary of nonroof and roof | TD_Summary of nonroof and roof | No        |

  @RegressionTest
  Scenario Outline: Checking Auto Save functionality in Heat Island Reduction form for Contributing nonroof measures
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
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
    And User verifies the revision icon present after saving the form
    And User dowloads the form as pdf
    And User verifies the tables
    And User verifies text with pdf
    And User verifies the narrative
    And User deletes the downloaded pdf file

    Examples: 
      | formname              | project          | ratingSystem |
      | Heat Island Reduction | BDD6 TestProject | O+M:EB       |
