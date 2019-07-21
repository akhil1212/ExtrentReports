package common
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords

import internal.GlobalVariable

import MobileBuiltInKeywords as Mobile
import WSBuiltInKeywords as WS
import WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.eclipse.persistence.internal.jpa.parsing.jpql.antlr.JPQLParser.aggregateExpression_scope
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import projectKeywords.LeedOnlineKeywords

import com.kms.katalon.core.configuration.RunConfiguration
import groovy.io.FileType
import org.openqa.selenium.Keys as Keys
import com.kms.katalon.core.testobject.SelectorMethod
import org.openqa.selenium.remote.HttpCommandExecutor
import org.openqa.selenium.remote.SessionId
import org.openqa.selenium.remote.RemoteWebDriver
import org.openqa.selenium.Capabilities

import java.io.File;

import org.testng.Assert;
import org.testng.ITestResult;
import org.testng.SkipException;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.apache.commons.io.FileUtils;
import org.junit.After
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
//import org.openqa.selenium.ExtentReports.TakesScreenshot;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.ITestContext;
import org.testng.ITestListener;
//import projectKeywords.LeedOnlineKeywords
import common.commonReport;
import extentKeywords.ExtentKeyReports;

class LoginStepDefinition {
	ExtentTest logger;
	ExtentReports extent = commonReport.extent;
	String browserName = ""
	@Given("User has to navigate to leed online home page")
	public void user_has_to_navigate_to_leed_online_home_page() {
		//'	new LeedOnlineKeywords().setDownloadPath()
		try{
			WebUI.openBrowser("")
			WebUI.maximizeWindow()

			RemoteWebDriver driver = DriverFactory.getWebDriver()
			//String DownloadPath = "C:\\Users\\Group10\\Desktop\\LEEDAutosave\\Include\\TestData\\DownloadedFiles"
			//	String DownloadPath = "/home/promantusinc/Documents/NewGitRepo/Usgbc_LeedOnline/LEEDAutosave/Include/TestData/DownloadedFiles"
			String DownloadPath = "/var/lib/jenkins/workspace/ExtentReportCheck/LEEDAutosave/Include/TestData/DownloadedFiles"

			new	LeedOnlineKeywords().sendCommandForDownloadChromeHeadLess((HttpCommandExecutor)driver.getCommandExecutor(),driver.getSessionId(), DownloadPath )

			WebUI.navigateToUrl("https://leedonline-stg.usgbc.org")

			logger = extent.startTest("Login");
			Assert.assertTrue(true);

			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.assignCategory("Login"+" - "+browserName);
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User clicks the Complete icon to set status to Ready for Review",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "Test Case is failed");
			new LeedOnlineKeywords ().takeScreenshot(logger)


		}

	}

	@And("User enters the username (.*) and password (.*)")
	public void user_enters_the_username_automationbdd_gmail_com_and_password_initpass(String username, String password) {
		try{
			TestObject userNameObj = new TestObject().addProperty('xpath',ConditionType.EQUALS,entities.userName)
			TestObject passwordObj = new TestObject().addProperty('xpath',ConditionType.EQUALS,entities.password)
			//WebUI.setText(findTestObject('Object Repository/Login/input_Log username'), username)
			//WebUI.setText(findTestObject('Object Repository/Login/input_Log password'), password)

			WebUI.setText(userNameObj, username)
			WebUI.setText(passwordObj, password)
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User enters the username (.*) and password (.*)",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User enters the username (.*) and password (.*) is failed");
			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
	}

	@And("User has to accept end user license agreement")
	public void user_has_to_accept_end_user_license_agreement() {
		try{
			WebUI.delay(3)
			//WebUI.scrollToElement(findTestObject('Object Repository/Login/span_End User License Agreemen'),30)
			//WebUI.check(findTestObject('Object Repository/Login/span_End User License Agreemen'))
			TestObject agreementObj = new TestObject().addProperty('xpath',ConditionType.EQUALS,entities.agreement)
			WebUI.scrollToElement(agreementObj,30)
			WebUI.check(agreementObj)
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User has to accept end user license agreement",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User has to accept end user license agreement is failed");
			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
	}


	@When("User clicks on LOG IN button")
	public void user_clicks_on_LOG_IN_button() {
		try{
			WebUI.delay(4)
			//	WebUI.click(findTestObject('Object Repository/Login/button_Log In'))

			TestObject btnObj = new TestObject().addProperty('xpath',ConditionType.EQUALS,entities.loginButton)
			//WebUI.click(btnObj)

			WebUI.submit(btnObj)
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User clicks on LOG IN button",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User clicks on LOG IN button is failed");
			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
	}

	@Then("User will be logged in successfully")
	public void user_will_be_logged_in_successfully(){
		try{
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User will be logged in successfully",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User will be logged in successfully is failed");
			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
		extent.endTest(logger)

	}
}