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
import common.entities
import projectKeywords.LeedOnlineKeywords
import FundamentalRefregrantMgmt

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


class AutoSaveStepDef {
	int rowNum
	ExtentTest logger;
	ExtentReports extent = commonReport.extent;
	String browserName = ""
	String NameOfForm
	static String dateTime
	static String narrativeText
	@When("User uploads files to Add file button to check auto save on form (.*) rating (.*)")
	public void user_uploads_files_to_Add_file_button(String formname, String rating) {
		try{
			int formRow = new LeedOnlineKeywords().get_rowNumber_of_form(formname,rating)
			rowNum = formRow

			println rowNum

			String formName = findTestData("Data Files/TD_FormElements").getValue("Form Name", rowNum)

			NameOfForm =formName


			//WebUI.click(findTestObject("Object Repository/Page_LEED Online/label_Comprehensive Phase-Out Plan"))
			TestObject iFrame = new TestObject().addProperty('xpath',ConditionType.EQUALS,entities.formIframe,true)
			WebUI.switchToFrame(iFrame, 1)
			TestObject draftDateObj = new TestObject().addProperty('xpath',ConditionType.EQUALS,entities.draftDate,true)
			WebUI.delay(8)
			dateTime = WebUI.getText(draftDateObj)
			WebUI.switchToDefaultContent()
			String addfileNum = findTestData("Data Files/TD_FormElements").getValue("Add File", rowNum)

			//println "Number of Add files "+addfileNum
			int length = Integer.parseInt(addfileNum)

			//println "Addfile num "+length
			WebUI.delay(10)
			for(int i=1;i<=length;i++){

				//String xPath = entities.addFile+'['+i+']'
				//String xPath = '(//input[@type="file"])['+i+']'


				new LeedOnlineKeywords().UploadFiles_to_Addfile(i)
				//println "The path is ###################"+xPath
				WebUI.delay(3)
			}
			logger = extent.startTest("AutoSave");
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.assignCategory("AutoSave"+" - "+browserName);
			Assert.assertTrue(true);
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User uploads files to Add file button to check auto save on form",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User uploads files to Add file button to check auto save on form failed");

			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
	}

	@And("User verifies form not saved as draft")
	public void user_verifies_form_not_saved_as_draft(){
		try{
			WebUI.delay(10)

			TestObject draftDateObj = new TestObject().addProperty('xpath',ConditionType.EQUALS,entities.draftDate,true)

			TestObject iFrame = new TestObject().addProperty('xpath',ConditionType.EQUALS,entities.formIframe,true)
			WebUI.switchToFrame(iFrame, 1)
			String qq = WebUI.getText(draftDateObj)

			println "Date and Time before narrative "+dateTime

			println "Date and Time after narrative "+qq

			WebUI.verifyMatch(dateTime, qq, false)
			WebUI.switchToDefaultContent()
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User verifies form not saved as draft",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User verifies form not saved as draft failed");

			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
	}

	@And("User Enters data to Narrative field to check auto save on form (.*) rating (.*)")
	public void user_enters_data_to_Narrative_field(String formname, String rating){
		try{
			int formRow = new LeedOnlineKeywords().get_rowNumber_of_form(formname,rating)
			rowNum = formRow

			println rowNum

			String formName = findTestData("Data Files/TD_FormElements").getValue("Form Name", rowNum)

			NameOfForm =formName
			WebUI.delay(3)
			TestObject iFrame = new TestObject().addProperty('xpath',ConditionType.EQUALS,entities.formIframe,true)
			WebUI.switchToFrame(iFrame, 1)
			//dateTime = WebUI.getText(draftDateObj)
			//println dateTime
			WebUI.switchToDefaultContent()
			String narrativeNum = findTestData("Data Files/TD_FormElements").getValue("Narrative", rowNum)
			println "Number of Narrative "+narrativeNum
			int length = Integer.parseInt(narrativeNum)
			for(int i=1;i<=length;i++){
				String path_narrative = entities.narrative+"["+i+"]"
				new LeedOnlineKeywords().fill_narrative(path_narrative)
			}
			WebUI.delay(10)
			WebUI.switchToFrame(iFrame, 1)

			TestObject draftDateObj = new TestObject().addProperty('xpath',ConditionType.EQUALS,entities.draftDate,true)

			WebUI.verifyElementPresent(draftDateObj, 3)

			//dateTime = WebUI.getText(draftDateObj)
			WebUI.switchToDefaultContent()

			//println dateTime
			narrativeText = new LeedOnlineKeywords().get_narrative_text()
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User Enters data to Narrative field to check auto save on form",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User Enters data to Narrative field to check auto save on form failed");

			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
	}

	@And("User verifies warning message of form saved as draft")
	public void user_verifies_warning_message_of_form_saved_as_draft(){
		try{
			WebUI.delay(10)
			WebUI.back()
			WebUI.delay(3)

			WebUI.forward()
			WebUI.delay(4)

			String warn = "//div[contains(text(),'Form drafted and not yet saved!')]"

			TestObject warnObj = new TestObject().addProperty('xpath',ConditionType.EQUALS,warn,true)
			println "Text before going back "+narrativeText

			String narrativeAfter = new LeedOnlineKeywords().get_narrative_text()

			//WebUI.verifyMatch(narrativeText, narrativeAfter, false)
			println "Text after "+narrativeAfter
			//WebUI.verifyTextPresent("Form drafted and not yet saved!", false)
			TestObject iFrame = new TestObject().addProperty('xpath',ConditionType.EQUALS,entities.formIframe,true)
			WebUI.switchToFrame(iFrame, 1)

			WebUI.verifyElementPresent(warnObj, 2)
			WebUI.switchToDefaultContent()
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User verifies warning message of form saved as draft",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User verifies warning message of form saved as draft failed");

			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
	}

	@And("User checks form saved as draft")
	public void user_checks_autosave(){
		try{
			WebUI.delay(10)

			TestObject draftDateObj = new TestObject().addProperty('xpath',ConditionType.EQUALS,entities.draftDate,true)

			TestObject iFrame = new TestObject().addProperty('xpath',ConditionType.EQUALS,entities.formIframe,true)
			WebUI.switchToFrame(iFrame, 1)
			String qq = WebUI.getText(draftDateObj)

			println "Date and Time before narrative "+dateTime

			println "Date and Time after narrative "+qq

			WebUI.verifyNotMatch(dateTime, qq, false, FailureHandling.STOP_ON_FAILURE)
			WebUI.switchToDefaultContent()
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User checks form saved as draft",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User checks form saved as draft failed");

			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
	}

	@And("User clears the draft")
	public void user_clears_draft(){
		try{
			new LeedOnlineKeywords().clear_draft()
			WebUI.delay(4)
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User clears the draft",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User clears the draft failed");

			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
	}

	@And("User Enters data to Narrative field after clear draft")
	public void user_enters_data_to_Narrative_field_after_clear_draft(){
		try{
			String path_narrative = entities.narrative+"[1]"
			new LeedOnlineKeywords().fill_narrative(path_narrative)
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User Enters data to Narrative field after clear draft",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User Enters data to Narrative field after clear draft failed");

			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
	}

	@And("User dowloads the form as pdf")
	public void user_verifies_the_PDF(){
		try{
			new LeedOnlineKeywords().click_pdf_Icon()
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User dowloads the form as pdf",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User dowloads the form as pdf failed");

			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
	}

	@And("User verifies the narrative")

	public void user_verifies_the_narraive(){
		try{
			String narrativeNum = findTestData("Data Files/TD_FormElements").getValue("Narrative", rowNum)
			println "Number of Narrative "+narrativeNum
			int length = Integer.parseInt(narrativeNum)
			for(int i=1;i<=length;i++){
				new LeedOnlineKeywords().verify_narrative_text_fromPdf(i)
			}
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User verifies the narrative",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User verifies the narrative failed");

			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
	}

	@And("User verifies text with pdf")
	public void user_verifies_text_with_pdf(){
		try{
			String textBoxNum = findTestData("Data Files/TD_FormElements").getValue("Text Box", rowNum)

			println "Text box number "+textBoxNum
			int length_text = Integer.parseInt(textBoxNum)
			String numberTextBoxNum = findTestData("Data Files/TD_FormElements").getValue("Text Box for Numbers", rowNum)

			int length_textWithNum=Integer.parseInt(numberTextBoxNum)


			if(length_text>0){

				for(int i=1;i<=length_text;i++){
					TestObject textBoxWithNum = new TestObject().addProperty('xpath',ConditionType.EQUALS,entities.textMedium+"["+i+"]",true)
					new LeedOnlineKeywords().verify_text_value_fromPdf(textBoxWithNum)
				}
			}

			if(length_textWithNum>0){

				for(int i=1;i<=length_textWithNum;i++){
					TestObject textBoxWithNum = new TestObject().addProperty('xpath',ConditionType.EQUALS,entities.textRtl+"["+i+"]",true)
					new LeedOnlineKeywords().verify_text_value_fromPdf(textBoxWithNum)
				}
			}
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User verifies text with pdf",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User verifies text with pdf failed");

			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
	}

	@And("User verifies the tables")
	public void user_verifies_tables(){
		try{
			String tableNum = findTestData("Data Files/TD_FormElements").getValue("Table", rowNum)

			int length=Integer.parseInt(tableNum)
			new LeedOnlineKeywords().verify_pdf_table(length)
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User verifies the tables",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User verifies the tables failed");

			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
	}


	@And("User deletes the downloaded pdf file")
	public void user_deletes_the_downloaded_files(){
		try{
			WebUI.delay(5)
			new LeedOnlineKeywords().deletePdfFile()
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User deletes the downloaded pdf file",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User deletes the downloaded pdf file failed");

			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
	}

	@And("User verifies the revision icon present after saving the form")
	public void user_verifies_the_revision_icon_present_after_saving_the_form(){
		try{
			WebUI.delay(2)
			new LeedOnlineKeywords().check_revisionIcon()
			browserName = new LeedOnlineKeywords().getBrowserName()
			logger.log(LogStatus.PASS, "User verifies the revision icon present after saving the form",browserName);
		}catch(Exception e){
			logger.log(LogStatus.FAIL, "User verifies the revision icon present after saving the form failed");

			new LeedOnlineKeywords ().takeScreenshot(logger)

		}
		extent.endTest(logger)

	}

}