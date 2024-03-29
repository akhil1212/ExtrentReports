import com.kms.katalon.core.logging.KeywordLogger
import com.kms.katalon.core.exception.StepFailedException
import com.kms.katalon.core.reporting.ReportUtil
import com.kms.katalon.core.main.TestCaseMain
import com.kms.katalon.core.testdata.TestDataColumn
import com.kms.katalon.core.testcase.TestCaseBinding
import com.kms.katalon.core.driver.internal.DriverCleanerCollector
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.configuration.RunConfiguration
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import internal.GlobalVariable as GlobalVariable

Map<String, String> suiteProperties = new HashMap<String, String>();


suiteProperties.put('id', 'Test Suites/TS_LEEDOnline')

suiteProperties.put('name', 'TS_LEEDOnline')

suiteProperties.put('description', '')
 

DriverCleanerCollector.getInstance().addDriverCleaner(new com.kms.katalon.core.webui.contribution.WebUiDriverCleaner())
DriverCleanerCollector.getInstance().addDriverCleaner(new com.kms.katalon.core.mobile.contribution.MobileDriverCleaner())
DriverCleanerCollector.getInstance().addDriverCleaner(new com.kms.katalon.core.cucumber.keyword.internal.CucumberDriverCleaner())



RunConfiguration.setExecutionSettingFile("C:\\Users\\Group10\\Desktop\\LEEDAutosave\\Reports\\TS_LEEDOnline\\20190721_123048\\execution.properties")

TestCaseMain.beforeStart()

TestCaseMain.startTestSuite('Test Suites/TS_LEEDOnline', suiteProperties, [new TestCaseBinding('Test Cases/TC_Innovation', 'Test Cases/TC_Innovation',  null), new TestCaseBinding('Test Cases/TC_LightPollutionReduction', 'Test Cases/TC_LightPollutionReduction',  null), new TestCaseBinding('Test Cases/TC_MinimumIndoorAirQuality', 'Test Cases/TC_MinimumIndoorAirQuality',  null), new TestCaseBinding('Test Cases/TC_SiteManagement', 'Test Cases/TC_SiteManagement',  null), new TestCaseBinding('Test Cases/TC_Purchasing', 'Test Cases/TC_Purchasing',  null), new TestCaseBinding('Test Cases/TC_ProjectInformation', 'Test Cases/TC_ProjectInformation',  null)])
