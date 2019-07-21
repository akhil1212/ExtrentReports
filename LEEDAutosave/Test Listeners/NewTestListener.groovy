import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject

import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile

import internal.GlobalVariable as GlobalVariable

import com.kms.katalon.core.annotation.BeforeTestCase
import com.kms.katalon.core.annotation.BeforeTestSuite
import com.kms.katalon.core.annotation.AfterTestCase
import com.kms.katalon.core.annotation.AfterTestSuite
import com.kms.katalon.core.context.TestCaseContext
import com.kms.katalon.core.context.TestSuiteContext


import extentKeywords.ExtentKeyReports;

import java.io.File;

import org.testng.Assert;
import org.testng.ITestResult;
import org.testng.SkipException;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import projectKeywords.LeedOnlineKeywords

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
import common.commonReport
import org.openqa.selenium.remote.RemoteWebDriver
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.WebDriver

class NewTestListener {
	/**
	 * Executes before every test suite starts.
	 * @param testSuiteContext: related information of the executed test suite.
	 */
	/*@BeforeTestSuite
	public void startReport(){
		ExtentReports extent;
		ExtentTest logger;
		ExtentTest test;

		extent = new ExtentReports (System.getProperty("user.dir") +"\\ExtentReports\\TestReport.xml", true);

		extent
				.addSystemInfo("Host Name", "SoftwareTesting")
				.addSystemInfo("Environment", "Automation Testing")
				.addSystemInfo("User Name", "sai");
				

		extent.loadConfig(new File(System.getProperty("user.dir")+"\\extent-config.xml"));
	}*/
	
	@BeforeTestSuite
	
	def sampleBeforeTestSuite(TestSuiteContext testSuiteContext) {
		
		println testSuiteContext.getTestSuiteId()
		Date date = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd_hhmmss_a");
		String TestReport ="Test Report" + dateFormat.format(date).toString()
		println"***************************"+ TestReport
		// commonE.extent=new ExtentReports (System.getProperty("user.dir") +'\\ExtentReports\\testreport1.html', true);
		
		 commonReport.extent=new ExtentReports("/var/lib/jenkins/workspace/ExtentReportCheck/LEEDAutosave/ExtentReports", true)
		 //new ExtentReports (System.getProperty("user.dir") +'\\ExtentReports\\'+TestReport+'.html', true)
		
		
	}
		@AfterTestSuite
		def sampleAfterTestSuite(TestSuiteContext testSuiteContext) {
			commonReport.extent.flush()
	}
}