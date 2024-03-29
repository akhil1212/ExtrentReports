#Feature: Entering data to Grid Harmonization form - LEED v4.1 O+M: EB
#---------------------------------------------------------------------------------------------------------------------------------
# Authors :                                                                                                                                                          Reviewer    :
# Date   :                                                                                                                                                                   Reviewed On :
# Last Updated By:
# Last Updated On:
# Feature Name:
# Feature Description:
#---------------------------------------------------------------------------------------------------------------------------------
Feature: Entering data to Grid Harmonization form - LEED v4.1 O+M: EB

  @SmokeTest
  Scenario Outline: Filling Grid Harmonization form for Demand response program available and participation
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
    When User will select the Radio Button
    And User checks the checkbox option
    And User enters data to text box with number
    And User uploads files to Add file button
    And User Enters data to Narrative field
    And User downloads the uploaded files
    And User deletes the uploaded files
    And User clicks on Save button
    Then User can able to see the form got saved
    And User clicks the Complete icon to set status to Ready for Review

    Examples: 
      | formname                                 | project          | ratingSystem |
      | Grid Harmonization-demandResProgramAvail | BDD6 TestProject | O+M:EB       |

  @SmokeTest
  Scenario Outline: Filling Grid Harmonization form for Demand response capable building
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
    When User will select the Radio Button
    And User checks the checkbox option
    And User enters data to text box with number
    And User uploads files to Add file button
    And User Enters data to Narrative field
    And User downloads the uploaded files
    And User deletes the uploaded files
    And User clicks on Save button
    Then User can able to see the form got saved
    And User clicks the Complete icon to set status to Ready for Review

    Examples: 
      | formname                                    | project          | ratingSystem |
      | Grid Harmonization-demandResCapableBuilding | BDD6 TestProject | O+M:EB       |

  @SmokeTest
  Scenario Outline: Filling Grid Harmonization form for Permanent load shifting technologies
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
    When User will select the Radio Button
    And User checks the checkbox option
    And User enters data to text box with number
    And User uploads files to Add file button
    And User Enters data to Narrative field
    And User downloads the uploaded files
    And User deletes the uploaded files
    And User clicks on Save button
    Then User can able to see the form got saved
    And User clicks the Complete icon to set status to Ready for Review

    Examples: 
      | formname                                     | project          | ratingSystem |
      | Grid Harmonization-permLoadShiftTechnologies | BDD6 TestProject | O+M:EB       |

  @RegressionTest
  Scenario Outline: Checking Auto Save functionality in Grid Harmonization form for Demand response program available and participation
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>    When User will select the Radio Button
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
    And User verifies the narrative
    And User verifies text with pdf
    And User deletes the downloaded pdf file

    Examples: 
      | formname                                    | project          | ratingSystem |
      | Grid Harmonization-demandResCapableBuilding | BDD6 TestProject | O+M:EB       |

  @RegressionTest
  Scenario Outline: Checking Auto Save functionality in Grid Harmonization form for Permanent load shifting technologies
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
    And User verifies the revision icon present after saving the form
    And User dowloads the form as pdf
    And User verifies the narrative
    And User verifies text with pdf
    And User deletes the downloaded pdf file

    Examples: 
      | formname                                     | project          | ratingSystem |
      | Grid Harmonization-permLoadShiftTechnologies | BDD6 TestProject | O+M:EB       |
