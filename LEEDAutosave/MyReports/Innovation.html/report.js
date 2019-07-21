$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/ScoreCard/Innovation.feature");
formatter.feature({
  "name": "Entering data to Innovation form - LEED v4.1 O+M: EB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Filling Innovation form for InnovationStrategy",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User clicks on project \u003cproject\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "User navigates to the credits page of the project",
  "keyword": "And "
});
formatter.step({
  "name": "User should be on form \u003cformname\u003e rating \u003cratingSystem\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User will select the Radio Button",
  "keyword": "When "
});
formatter.step({
  "name": "User uploads files to Add file button",
  "keyword": "And "
});
formatter.step({
  "name": "User Enters data to Narrative field",
  "keyword": "And "
});
formatter.step({
  "name": "User downloads the uploaded files",
  "keyword": "And "
});
formatter.step({
  "name": "User deletes the uploaded files",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Save button",
  "keyword": "And "
});
formatter.step({
  "name": "User can able to see the form got saved",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks the Complete icon to set status to Ready for Review",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "formname",
        "project",
        "ratingSystem"
      ]
    },
    {
      "cells": [
        "Innovation-InnovationStrategy",
        "BDD6 TestProject",
        "O+M:EB"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Filling Innovation form for InnovationStrategy",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User clicks on project BDD6 TestProject",
  "keyword": "Given "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_clicks_on_Project(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to the credits page of the project",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_navigates_to_the_credits_page_of_the_project()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be on form Innovation-InnovationStrategy rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_should_be_on_FRM_form(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will select the Radio Button",
  "keyword": "When "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_will_select_the_Radio_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User uploads files to Add file button",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_uploads_files_to_Add_file_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters data to Narrative field",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_enters_data_to_Narrative_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User downloads the uploaded files",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_downloads_the_uploaded_files()"
});
