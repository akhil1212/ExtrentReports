Feature: Entering data to Fundamental Refrigerant Management form

  Scenario Outline: Filling Fundamental Refrigerant Management form for Economic Analysis
    Given User clicks on project <project>
    And User navigates to the credits page of the project
    And User should be on form <formname> rating <ratingSystem>
    When User Enters data to Narrative field
    And User uploads files to Add file button
    And User downloads the uploaded files
    And User deletes the uploaded files
    And User clicks on Save button
    Then User can able to see the form got saved
    And User clicks the Complete icon to set status to Ready for Review

    Examples:
      | formname            | project                  | ratingSystem |
      | Project Information | InteriorsBDD6testproject | Interiors    |
