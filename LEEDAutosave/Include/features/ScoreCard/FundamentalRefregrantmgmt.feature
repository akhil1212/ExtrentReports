#Feature: Entering data to Fundamental Refrigerant Management form
#---------------------------------------------------------------------------------------------------------------------------------
# Authors :                                                                                                                                                          Reviewer    :
# Date   :                                                                                                                                                                   Reviewed On :
# Last Updated By:
# Last Updated On:
# Feature Name:
# Feature Description:
#---------------------------------------------------------------------------------------------------------------------------------
Feature: Entering data to Fundamental Refrigerant Management form

  @SmokeTest
  Scenario Outline: Filling Fundamental Refrigerant Management form for noCfcRefrigerants
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
    And User checks the checkbox option
    And User uploads files to Add file button
    And User Enters data to Narrative field
    And User downloads the uploaded files
    And User deletes the uploaded files
    And User clicks on Save button
    Then User can able to see the form got saved
    And User clicks the Complete icon to set status to Ready for Review

    Examples: 
      | formname                                               | project          | ratingSystem |
      | Fundamental Refrigerant Management-noCfcRefrigerants!C | BDD6 TestProject | O+M:EB       |

  @SmokeTest
  Scenario Outline: Filling Fundamental Refrigerant Management form for Comprehensive Phase-Out Plan
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
    When User will select the Radio Button
    And User uploads files to Add file button
    And User Enters data to Narrative field
    And User fills the table <tableName> with data <testData> isAddRow <isAddRow>
    And User checks the checkbox option
    And User downloads the uploaded files
    And User deletes the uploaded files
    And User clicks on Save button
    Then User can able to see the form got saved
    And User clicks the Complete icon to set status to Ready for Review

    Examples: 
      | formname                                                   | project          | ratingSystem | tableName                                             | testData                      | isAddRow |
      | Fundamental Refrigerant Management-comprehensivePhaseOut!R | BDD6 TestProject | O+M:EB       | Table: Mechanical Cooling and Refrigeration Equipment | TD_FundamentalRefrigerantMgmt | Yes      |

  @SmokeTest
  Scenario Outline: Filling Fundamental Refrigerant Management form for Economic Analysis
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
    When User will select the Radio Button
    And User uploads files to Add file button
    And User Enters data to Narrative field
    And User enters data to text box
    And User fills the table <tableName> with data <testData> isAddRow <isAddRow>
    And User fills the table <tableName1> with data <testData1> isAddRow <isAddRow1>
    And User checks the checkbox option
    And User downloads the uploaded files
    And User deletes the uploaded files
    And User clicks on Save button
    Then User can able to see the form got saved
    And User clicks the Complete icon to set status to Ready for Review

    Examples: 
      | formname                                              | project          | ratingSystem | tableName                                             | testData                      | isAddRow | tableName1            | testData1        | isAddRow1 |
      | Fundamental Refrigerant Management-economicAnalysis!R | BDD6 TestProject | O+M:EB       | Table: Mechanical Cooling and Refrigeration Equipment | TD_FundamentalRefrigerantMgmt | Yes      | Table: Simple Payback | TD_SimplePayback | No        |

  @RegressionTest
  Scenario Outline: Checking Auto Save functionality in Fundamental Refrigerant Management form for noCfcRefrigerants
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
    And User checks the checkbox option
    And User Enters data to Narrative field to check auto save on form <formname> rating <ratingSystem>
    And User uploads files to Add file button to check auto save on form <formname> rating <ratingSystem>
    And User verifies form not saved as draft
    And User Enters data to Narrative field to check auto save on form <formname> rating <ratingSystem>
    And User verifies warning message of form saved as draft
    And User checks form saved as draft
    And User deletes the uploaded files
    And User clears the draft
    And User checks the checkbox option
    And User Enters data to Narrative field after clear draft
    And User clicks on Save button
    Then User can able to see the form got saved
    And User verifies the revision icon present after saving the form
    And User dowloads the form as pdf
    And User verifies the narrative
    And User deletes the downloaded pdf file

    Examples: 
      | formname                                               | project          | ratingSystem |
      | Fundamental Refrigerant Management-noCfcRefrigerants!C | BDD6 TestProject | O+M:EB       |

  @RegressionTest
  Scenario Outline: Checking Auto Save functionality in Fundamental Refrigerant Management form for Economic Analysis
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
    And User will select the Radio Button
    And User Enters data to Narrative field after clear draft
    And User fills the table <tableName1> with data <testData1> isAddRow <isAddRow1>
    And User enters data to text box
    And User clicks on Save button
    Then User can able to see the form got saved
    And User verifies the revision icon present after saving the form
    And User dowloads the form as pdf
    And User verifies the narrative
    And User verifies text with pdf
    And User verifies the tables
    And User deletes the downloaded pdf file

    Examples: 
      | formname                                              | project          | ratingSystem | tableName1            | testData1        | isAddRow1 |
      | Fundamental Refrigerant Management-economicAnalysis!R | BDD6 TestProject | O+M:EB       | Table: Simple Payback | TD_SimplePayback | No        |

  @RegressionTest
  Scenario Outline: Checking Auto Save functionality in Fundamental Refrigerant Management form for Comprehensive Phase-Out Plan
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
        And User will select the Radio Button
    
    And User Enters data to Narrative field after clear draft
    And User fills the table <tableName> with data <testData> isAddRow <isAddRow>
    And User clicks on Save button
    Then User can able to see the form got saved
    And User verifies the revision icon present after saving the form
    And User dowloads the form as pdf
    And User verifies the narrative
    And User verifies the tables
    And User deletes the downloaded pdf file

    Examples: 
      | formname                                                   | project          | ratingSystem |
      | Fundamental Refrigerant Management-comprehensivePhaseOut!R | BDD6 TestProject | O+M:EB       |
