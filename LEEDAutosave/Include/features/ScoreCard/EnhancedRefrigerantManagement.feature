#Feature: Entering data to Enhanced Refrigerant Management - LEED v4.1 O+M: EB
#---------------------------------------------------------------------------------------------------------------------------------
# Authors :                                                                                                                                                          Reviewer    :
# Date   :                                                                                                                                                                   Reviewed On :
# Last Updated By:
# Last Updated On:
# Feature Name:
# Feature Description:
#---------------------------------------------------------------------------------------------------------------------------------
Feature: Entering data to Enhanced Refrigerant Management - LEED v4.1 O+M: EB

  @SmokeTest
  Scenario Outline: Filling Enhanced Refrigerant Management form for No Refrigerants or Low-Impact Refrigerants
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
    When User will select the Radio Button
    And User uploads files to Add file button
    And User Enters data to Narrative field
    And User downloads the uploaded files
    And User deletes the uploaded files
    And User clicks on Save button
    Then User can able to see the form got saved
    And User clicks the Complete icon to set status to Ready for Review

    Examples: 
      | formname                                            |project          | ratingSystem |
      | Enhanced Refrigerant Management-noRefrigOrLowImpact | BDD6 TestProject | O+M:EB       |

  @SmokeTest
  Scenario Outline: Filling Enhanced Refrigerant Management form for Calculation of Refrigerant Impact
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
    When User will select the Radio Button
    And User uploads files to Add file button
    And User Enters data to Narrative field
    And User fills the table <tableName> with data <testData> isAddRow <isAddRow>
    And User downloads the uploaded files
    And User deletes the uploaded files
    And User clicks on Save button
    Then User can able to see the form got saved
    And User clicks the Complete icon to set status to Ready for Review

    Examples: 
      | formname                                              |project          | ratingSystem | tableName                                             | testData                                      | isAddRow |
      | Enhanced Refrigerant Management-calcRefrigerantImpact | BDD6 TestProject | O+M:EB       |Table: Mechanical Cooling and Refrigeration Equipment | TD_MechanicalCoolingandRefrigerationEquipment | Yes      |

  @RegressionTest
  Scenario Outline: Checking Auto Save functionality in Enhanced Refrigerant Management form for No Refrigerants or Low-Impact Refrigerants
   Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
    When User will select the Radio Button
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
    When User will select the Radio Button
    And User dowloads the form as pdf
    And User verifies the narrative
    And User deletes the downloaded pdf file

    Examples: 
      | formname                                            |project          | ratingSystem |
      | Enhanced Refrigerant Management-noRefrigOrLowImpact |BDD6 TestProject | O+M:EB       |

  @RegressionTest
  Scenario Outline: Checking Auto Save functionality in Enhanced Refrigerant Management form for Calculation of Refrigerant Impact
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
    When User will select the Radio Button
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
    And User verifies the tables
    And User verifies the narrative
    And User verifies text with pdf
    And User deletes the downloaded pdf file

    Examples: 
      | formname                                              |project          | ratingSystem |
      | Enhanced Refrigerant Management-calcRefrigerantImpact |BDD6 TestProject | O+M:EB       |
