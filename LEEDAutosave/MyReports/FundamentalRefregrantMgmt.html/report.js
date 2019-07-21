$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/ScoreCard/FundamentalRefregrantmgmt.feature");
formatter.feature({
  "name": "Entering data to Fundamental Refrigerant Management form",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Filling Fundamental Refrigerant Management form for noCfcRefrigerants",
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
  "name": "User checks the checkbox option",
  "keyword": "And "
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
        "Fundamental Refrigerant Management-noCfcRefrigerants!C",
        "BDD6 TestProject",
        "O+M:EB"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Filling Fundamental Refrigerant Management form for noCfcRefrigerants",
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
  "error_message": "java.lang.NullPointerException: Cannot invoke method log() on null object\r\n\tat org.codehaus.groovy.runtime.NullObject.invokeMethod(NullObject.java:91)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.NullCallSite.call(NullCallSite.java:35)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat FundamentalRefregrantMgmt.user_clicks_on_Project(FundamentalRefregrantMgmt.groovy:105)\r\n\tat ✽.User clicks on project BDD6 TestProject(Include/features/ScoreCard/FundamentalRefregrantmgmt.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User navigates to the credits page of the project",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_navigates_to_the_credits_page_of_the_project()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be on form Fundamental Refrigerant Management-noCfcRefrigerants!C rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_should_be_on_FRM_form(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User checks the checkbox option",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_checks_the_checkbox_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User uploads files to Add file button",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_uploads_files_to_Add_file_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Enters data to Narrative field",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_enters_data_to_Narrative_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User downloads the uploaded files",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_downloads_the_uploaded_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User deletes the uploaded files",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_deletes_the_uploaded_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can able to see the form got saved",
  "keyword": "Then "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_can_able_to_see_the_form_got_saved()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks the Complete icon to set status to Ready for Review",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_clicks_the_Complete_icon_to_set_status_to_Ready_for_Review()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Filling Fundamental Refrigerant Management form for Comprehensive Phase-Out Plan",
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
  "name": "User fills the table \u003ctableName\u003e with data \u003ctestData\u003e isAddRow \u003cisAddRow\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User checks the checkbox option",
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
        "ratingSystem",
        "tableName",
        "testData",
        "isAddRow"
      ]
    },
    {
      "cells": [
        "Fundamental Refrigerant Management-comprehensivePhaseOut!R",
        "BDD6 TestProject",
        "O+M:EB",
        "Table: Mechanical Cooling and Refrigeration Equipment",
        "TD_FundamentalRefrigerantMgmt",
        "Yes"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Filling Fundamental Refrigerant Management form for Comprehensive Phase-Out Plan",
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
  "error_message": "java.lang.NullPointerException: Cannot invoke method log() on null object\r\n\tat org.codehaus.groovy.runtime.NullObject.invokeMethod(NullObject.java:91)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.NullCallSite.call(NullCallSite.java:35)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat FundamentalRefregrantMgmt.user_clicks_on_Project(FundamentalRefregrantMgmt.groovy:105)\r\n\tat ✽.User clicks on project BDD6 TestProject(Include/features/ScoreCard/FundamentalRefregrantmgmt.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User navigates to the credits page of the project",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_navigates_to_the_credits_page_of_the_project()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be on form Fundamental Refrigerant Management-comprehensivePhaseOut!R rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_should_be_on_FRM_form(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User will select the Radio Button",
  "keyword": "When "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_will_select_the_Radio_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User uploads files to Add file button",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_uploads_files_to_Add_file_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Enters data to Narrative field",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_enters_data_to_Narrative_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fills the table Table: Mechanical Cooling and Refrigeration Equipment with data TD_FundamentalRefrigerantMgmt isAddRow Yes",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_fills_the_table(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User checks the checkbox option",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_checks_the_checkbox_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User downloads the uploaded files",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_downloads_the_uploaded_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User deletes the uploaded files",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_deletes_the_uploaded_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can able to see the form got saved",
  "keyword": "Then "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_can_able_to_see_the_form_got_saved()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks the Complete icon to set status to Ready for Review",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_clicks_the_Complete_icon_to_set_status_to_Ready_for_Review()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Filling Fundamental Refrigerant Management form for Economic Analysis",
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
  "name": "User enters data to text box",
  "keyword": "And "
});
formatter.step({
  "name": "User fills the table \u003ctableName\u003e with data \u003ctestData\u003e isAddRow \u003cisAddRow\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User fills the table \u003ctableName1\u003e with data \u003ctestData1\u003e isAddRow \u003cisAddRow1\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User checks the checkbox option",
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
        "ratingSystem",
        "tableName",
        "testData",
        "isAddRow",
        "tableName1",
        "testData1",
        "isAddRow1"
      ]
    },
    {
      "cells": [
        "Fundamental Refrigerant Management-economicAnalysis!R",
        "BDD6 TestProject",
        "O+M:EB",
        "Table: Mechanical Cooling and Refrigeration Equipment",
        "TD_FundamentalRefrigerantMgmt",
        "Yes",
        "Table: Simple Payback",
        "TD_SimplePayback",
        "No"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Filling Fundamental Refrigerant Management form for Economic Analysis",
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
  "error_message": "java.lang.NullPointerException: Cannot invoke method log() on null object\r\n\tat org.codehaus.groovy.runtime.NullObject.invokeMethod(NullObject.java:91)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.NullCallSite.call(NullCallSite.java:35)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat FundamentalRefregrantMgmt.user_clicks_on_Project(FundamentalRefregrantMgmt.groovy:105)\r\n\tat ✽.User clicks on project BDD6 TestProject(Include/features/ScoreCard/FundamentalRefregrantmgmt.feature:52)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User navigates to the credits page of the project",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_navigates_to_the_credits_page_of_the_project()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be on form Fundamental Refrigerant Management-economicAnalysis!R rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_should_be_on_FRM_form(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User will select the Radio Button",
  "keyword": "When "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_will_select_the_Radio_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User uploads files to Add file button",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_uploads_files_to_Add_file_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Enters data to Narrative field",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_enters_data_to_Narrative_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters data to text box",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_enters_data_to_text_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fills the table Table: Mechanical Cooling and Refrigeration Equipment with data TD_FundamentalRefrigerantMgmt isAddRow Yes",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_fills_the_table(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fills the table Table: Simple Payback with data TD_SimplePayback isAddRow No",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_fills_the_table(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User checks the checkbox option",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_checks_the_checkbox_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User downloads the uploaded files",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_downloads_the_uploaded_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User deletes the uploaded files",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_deletes_the_uploaded_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can able to see the form got saved",
  "keyword": "Then "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_can_able_to_see_the_form_got_saved()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks the Complete icon to set status to Ready for Review",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_clicks_the_Complete_icon_to_set_status_to_Ready_for_Review()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Checking Auto Save functionality in Fundamental Refrigerant Management form for noCfcRefrigerants",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionTest"
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
  "name": "User checks the checkbox option",
  "keyword": "And "
});
formatter.step({
  "name": "User Enters data to Narrative field to check auto save on form \u003cformname\u003e rating \u003cratingSystem\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User uploads files to Add file button to check auto save on form \u003cformname\u003e rating \u003cratingSystem\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies form not saved as draft",
  "keyword": "And "
});
formatter.step({
  "name": "User Enters data to Narrative field to check auto save on form \u003cformname\u003e rating \u003cratingSystem\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies warning message of form saved as draft",
  "keyword": "And "
});
formatter.step({
  "name": "User checks form saved as draft",
  "keyword": "And "
});
formatter.step({
  "name": "User deletes the uploaded files",
  "keyword": "And "
});
formatter.step({
  "name": "User clears the draft",
  "keyword": "And "
});
formatter.step({
  "name": "User checks the checkbox option",
  "keyword": "And "
});
formatter.step({
  "name": "User Enters data to Narrative field after clear draft",
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
  "name": "User verifies the revision icon present after saving the form",
  "keyword": "And "
});
formatter.step({
  "name": "User dowloads the form as pdf",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies the narrative",
  "keyword": "And "
});
formatter.step({
  "name": "User deletes the downloaded pdf file",
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
        "Fundamental Refrigerant Management-noCfcRefrigerants!C",
        "BDD6 TestProject",
        "O+M:EB"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Checking Auto Save functionality in Fundamental Refrigerant Management form for noCfcRefrigerants",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionTest"
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
  "error_message": "java.lang.NullPointerException: Cannot invoke method log() on null object\r\n\tat org.codehaus.groovy.runtime.NullObject.invokeMethod(NullObject.java:91)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.NullCallSite.call(NullCallSite.java:35)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat FundamentalRefregrantMgmt.user_clicks_on_Project(FundamentalRefregrantMgmt.groovy:105)\r\n\tat ✽.User clicks on project BDD6 TestProject(Include/features/ScoreCard/FundamentalRefregrantmgmt.feature:74)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User navigates to the credits page of the project",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_navigates_to_the_credits_page_of_the_project()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be on form Fundamental Refrigerant Management-noCfcRefrigerants!C rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_should_be_on_FRM_form(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User checks the checkbox option",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_checks_the_checkbox_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Enters data to Narrative field to check auto save on form Fundamental Refrigerant Management-noCfcRefrigerants!C rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_enters_data_to_Narrative_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User uploads files to Add file button to check auto save on form Fundamental Refrigerant Management-noCfcRefrigerants!C rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_uploads_files_to_Add_file_button(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies form not saved as draft",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_form_not_saved_as_draft()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Enters data to Narrative field to check auto save on form Fundamental Refrigerant Management-noCfcRefrigerants!C rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_enters_data_to_Narrative_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies warning message of form saved as draft",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_warning_message_of_form_saved_as_draft()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User checks form saved as draft",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_checks_autosave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User deletes the uploaded files",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_deletes_the_uploaded_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clears the draft",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_clears_draft()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User checks the checkbox option",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_checks_the_checkbox_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Enters data to Narrative field after clear draft",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_enters_data_to_Narrative_field_after_clear_draft()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can able to see the form got saved",
  "keyword": "Then "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_can_able_to_see_the_form_got_saved()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies the revision icon present after saving the form",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_the_revision_icon_present_after_saving_the_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User dowloads the form as pdf",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_the_PDF()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies the narrative",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_the_narraive()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User deletes the downloaded pdf file",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_deletes_the_downloaded_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Checking Auto Save functionality in Fundamental Refrigerant Management form for Economic Analysis",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionTest"
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
  "name": "User Enters data to Narrative field to check auto save on form \u003cformname\u003e rating \u003cratingSystem\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User uploads files to Add file button to check auto save on form \u003cformname\u003e rating \u003cratingSystem\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies form not saved as draft",
  "keyword": "And "
});
formatter.step({
  "name": "User Enters data to Narrative field to check auto save on form \u003cformname\u003e rating \u003cratingSystem\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies warning message of form saved as draft",
  "keyword": "And "
});
formatter.step({
  "name": "User checks form saved as draft",
  "keyword": "And "
});
formatter.step({
  "name": "User deletes the uploaded files",
  "keyword": "And "
});
formatter.step({
  "name": "User clears the draft",
  "keyword": "And "
});
formatter.step({
  "name": "User will select the Radio Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Enters data to Narrative field after clear draft",
  "keyword": "And "
});
formatter.step({
  "name": "User fills the table \u003ctableName1\u003e with data \u003ctestData1\u003e isAddRow \u003cisAddRow1\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User enters data to text box",
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
  "name": "User verifies the revision icon present after saving the form",
  "keyword": "And "
});
formatter.step({
  "name": "User dowloads the form as pdf",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies the narrative",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies text with pdf",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies the tables",
  "keyword": "And "
});
formatter.step({
  "name": "User deletes the downloaded pdf file",
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
        "ratingSystem",
        "tableName1",
        "testData1",
        "isAddRow1"
      ]
    },
    {
      "cells": [
        "Fundamental Refrigerant Management-economicAnalysis!R",
        "BDD6 TestProject",
        "O+M:EB",
        "Table: Simple Payback",
        "TD_SimplePayback",
        "No"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Checking Auto Save functionality in Fundamental Refrigerant Management form for Economic Analysis",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionTest"
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
  "error_message": "java.lang.NullPointerException: Cannot invoke method log() on null object\r\n\tat org.codehaus.groovy.runtime.NullObject.invokeMethod(NullObject.java:91)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.NullCallSite.call(NullCallSite.java:35)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:57)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat FundamentalRefregrantMgmt.user_clicks_on_Project(FundamentalRefregrantMgmt.groovy:105)\r\n\tat ✽.User clicks on project BDD6 TestProject(Include/features/ScoreCard/FundamentalRefregrantmgmt.feature:101)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User navigates to the credits page of the project",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_navigates_to_the_credits_page_of_the_project()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be on form Fundamental Refrigerant Management-economicAnalysis!R rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_should_be_on_FRM_form(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User will select the Radio Button",
  "keyword": "When "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_will_select_the_Radio_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Enters data to Narrative field to check auto save on form Fundamental Refrigerant Management-economicAnalysis!R rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_enters_data_to_Narrative_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User uploads files to Add file button to check auto save on form Fundamental Refrigerant Management-economicAnalysis!R rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_uploads_files_to_Add_file_button(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies form not saved as draft",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_form_not_saved_as_draft()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Enters data to Narrative field to check auto save on form Fundamental Refrigerant Management-economicAnalysis!R rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_enters_data_to_Narrative_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies warning message of form saved as draft",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_warning_message_of_form_saved_as_draft()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User checks form saved as draft",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_checks_autosave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User deletes the uploaded files",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_deletes_the_uploaded_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clears the draft",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_clears_draft()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User will select the Radio Button",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_will_select_the_Radio_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Enters data to Narrative field after clear draft",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_enters_data_to_Narrative_field_after_clear_draft()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fills the table Table: Simple Payback with data TD_SimplePayback isAddRow No",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_fills_the_table(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters data to text box",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_enters_data_to_text_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can able to see the form got saved",
  "keyword": "Then "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_can_able_to_see_the_form_got_saved()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies the revision icon present after saving the form",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_the_revision_icon_present_after_saving_the_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User dowloads the form as pdf",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_the_PDF()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies the narrative",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_the_narraive()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies text with pdf",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_text_with_pdf()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies the tables",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_tables()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User deletes the downloaded pdf file",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_deletes_the_downloaded_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Checking Auto Save functionality in Fundamental Refrigerant Management form for Comprehensive Phase-Out Plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionTest"
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
  "name": "User Enters data to Narrative field to check auto save on form \u003cformname\u003e rating \u003cratingSystem\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User uploads files to Add file button to check auto save on form \u003cformname\u003e rating \u003cratingSystem\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies form not saved as draft",
  "keyword": "And "
});
formatter.step({
  "name": "User Enters data to Narrative field to check auto save on form \u003cformname\u003e rating \u003cratingSystem\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies warning message of form saved as draft",
  "keyword": "And "
});
formatter.step({
  "name": "User checks form saved as draft",
  "keyword": "And "
});
formatter.step({
  "name": "User deletes the uploaded files",
  "keyword": "And "
});
formatter.step({
  "name": "User clears the draft",
  "keyword": "And "
});
formatter.step({
  "name": "User will select the Radio Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Enters data to Narrative field after clear draft",
  "keyword": "And "
});
formatter.step({
  "name": "User fills the table \u003ctableName\u003e with data \u003ctestData\u003e isAddRow \u003cisAddRow\u003e",
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
  "name": "User verifies the revision icon present after saving the form",
  "keyword": "And "
});
formatter.step({
  "name": "User dowloads the form as pdf",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies the narrative",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies the tables",
  "keyword": "And "
});
formatter.step({
  "name": "User deletes the downloaded pdf file",
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
        "Fundamental Refrigerant Management-comprehensivePhaseOut!R",
        "BDD6 TestProject",
        "O+M:EB"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Checking Auto Save functionality in Fundamental Refrigerant Management form for Comprehensive Phase-Out Plan",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@RegressionTest"
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
  "name": "User should be on form Fundamental Refrigerant Management-comprehensivePhaseOut!R rating O+M:EB",
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
  "name": "User Enters data to Narrative field to check auto save on form Fundamental Refrigerant Management-comprehensivePhaseOut!R rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_enters_data_to_Narrative_field(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke method log() on null object\r\n\tat org.codehaus.groovy.runtime.NullObject.invokeMethod(NullObject.java:91)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.NullCallSite.call(NullCallSite.java:35)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat AutoSaveStepDef.user_enters_data_to_Narrative_field(AutoSaveStepDef.groovy:206)\r\n\tat ✽.User Enters data to Narrative field to check auto save on form Fundamental Refrigerant Management-comprehensivePhaseOut!R rating O+M:EB(Include/features/ScoreCard/FundamentalRefregrantmgmt.feature:136)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User uploads files to Add file button to check auto save on form Fundamental Refrigerant Management-comprehensivePhaseOut!R rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_uploads_files_to_Add_file_button(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies form not saved as draft",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_form_not_saved_as_draft()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Enters data to Narrative field to check auto save on form Fundamental Refrigerant Management-comprehensivePhaseOut!R rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_enters_data_to_Narrative_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies warning message of form saved as draft",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_warning_message_of_form_saved_as_draft()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User checks form saved as draft",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_checks_autosave()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User deletes the uploaded files",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_deletes_the_uploaded_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clears the draft",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_clears_draft()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User will select the Radio Button",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_will_select_the_Radio_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Enters data to Narrative field after clear draft",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_enters_data_to_Narrative_field_after_clear_draft()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User fills the table \u003ctableName\u003e with data \u003ctestData\u003e isAddRow \u003cisAddRow\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_fills_the_table(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_clicks_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can able to see the form got saved",
  "keyword": "Then "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_can_able_to_see_the_form_got_saved()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies the revision icon present after saving the form",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_the_revision_icon_present_after_saving_the_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User dowloads the form as pdf",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_the_PDF()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies the narrative",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_the_narraive()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verifies the tables",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_verifies_tables()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User deletes the downloaded pdf file",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_deletes_the_downloaded_files()"
});
formatter.result({
  "status": "skipped"
});
});