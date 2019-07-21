$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/ScoreCard/FacilityMaintenanceandRenovationPolicy.feature");
formatter.feature({
  "name": "Entering data to Facility Maintenance and Renovation Policy - LEED v4.1 O+M: EB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Filling Facility Maintenance and Renovation Policy",
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
  "name": "User uploads files to Add file button",
  "keyword": "When "
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
        "Facility Maintenance and Renovation Policy",
        "BDD6 TestProject",
        "O+M:EB"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Filling Facility Maintenance and Renovation Policy",
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
  "name": "User should be on form Facility Maintenance and Renovation Policy rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_should_be_on_FRM_form(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User uploads files to Add file button",
  "keyword": "When "
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
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User deletes the uploaded files",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_deletes_the_uploaded_files()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_clicks_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can able to see the form got saved",
  "keyword": "Then "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_can_able_to_see_the_form_got_saved()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Complete icon to set status to Ready for Review",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.User_clicks_the_Complete_icon_to_set_status_to_Ready_for_Review()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Checking Auto Save functionality in Facility Maintenance and Renovation Policy",
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
        "Facility Maintenance and Renovation Policy",
        "BDD6 TestProject",
        "O+M:EB"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Checking Auto Save functionality in Facility Maintenance and Renovation Policy",
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
  "name": "User should be on form Facility Maintenance and Renovation Policy rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "FundamentalRefregrantMgmt.user_should_be_on_FRM_form(String,String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Cannot take screenshot\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.TakeScreenshotKeyword.takeScreenshot(TakeScreenshotKeyword.groovy:88)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.TakeScreenshotKeyword.execute(TakeScreenshotKeyword.groovy:71)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.takeScreenshot(WebUiBuiltInKeywords.groovy:2881)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$takeScreenshot$15.call(Unknown Source)\r\n\tat projectKeywords.LeedOnlineKeywords.takeScreenshot(LeedOnlineKeywords.groovy:1090)\r\n\tat projectKeywords.LeedOnlineKeywords$takeScreenshot$14.call(Unknown Source)\r\n\tat FundamentalRefregrantMgmt.user_should_be_on_FRM_form(FundamentalRefregrantMgmt.groovy:192)\r\n\tat ✽.User should be on form Facility Maintenance and Renovation Policy rating O+M:EB(Include/features/ScoreCard/FacilityMaintenanceandRenovationPolicy.feature:33)\r\nCaused by: org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 9.997\n  (Session info: chrome\u003d75.0.3770.100)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:07:36.161Z\u0027\nSystem info: host: \u0027GROUP10-PC\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.selenium.driver.CChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\Group10\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52109}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 75.0.3770.100, webStorageEnabled: true}\nSession ID: 58a2d569f142bc1d112af3c6b8bcef01\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat com.kms.katalon.selenium.driver.CChromeDriver.execute(CChromeDriver.java:20)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:342)\r\n\tat com.kms.katalon.core.webui.util.FileUtil.takesScreenshot(FileUtil.java:27)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.TakeScreenshotKeyword$_takeScreenshot_closure1.doCall(TakeScreenshotKeyword.groovy:89)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.TakeScreenshotKeyword$_takeScreenshot_closure1.call(TakeScreenshotKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.TakeScreenshotKeyword.takeScreenshot(TakeScreenshotKeyword.groovy:88)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.TakeScreenshotKeyword.execute(TakeScreenshotKeyword.groovy:71)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:56)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.takeScreenshot(WebUiBuiltInKeywords.groovy:2881)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$takeScreenshot$15.call(Unknown Source)\r\n\tat projectKeywords.LeedOnlineKeywords.takeScreenshot(LeedOnlineKeywords.groovy:1090)\r\n\tat projectKeywords.LeedOnlineKeywords$takeScreenshot$14.call(Unknown Source)\r\n\tat FundamentalRefregrantMgmt.user_should_be_on_FRM_form(FundamentalRefregrantMgmt.groovy:192)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure3.doCall(CucumberBuiltinKeywords.groovy:260)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure3.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:66)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:257)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:357)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat Script1562065222975.run(Script1562065222975.groovy:19)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:331)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:322)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:301)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:293)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:227)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:129)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:112)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:81)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1563696202395.run(TempTestSuite1563696202395.groovy:35)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Enters data to Narrative field to check auto save on form Facility Maintenance and Renovation Policy rating O+M:EB",
  "keyword": "And "
});
formatter.match({
  "location": "AutoSaveStepDef.user_enters_data_to_Narrative_field(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User uploads files to Add file button to check auto save on form Facility Maintenance and Renovation Policy rating O+M:EB",
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
  "name": "User Enters data to Narrative field to check auto save on form Facility Maintenance and Renovation Policy rating O+M:EB",
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
});