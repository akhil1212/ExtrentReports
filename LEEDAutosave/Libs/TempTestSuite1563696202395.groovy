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



RunConfiguration.setExecutionSettingFile("C:\\Users\\Group10\\Desktop\\LEEDAutosave\\Reports\\TS_LEEDOnline\\20190721_133322\\execution.properties")

TestCaseMain.beforeStart()

TestCaseMain.startTestSuite('Test Suites/TS_LEEDOnline', suiteProperties, [new TestCaseBinding('Test Cases/TC_EnergyEfficiencyBestManagementPractices', 'Test Cases/TC_EnergyEfficiencyBestManagementPractices',  null), new TestCaseBinding('Test Cases/TC_EnhancedRefrigerantManagement', 'Test Cases/TC_EnhancedRefrigerantManagement',  null), new TestCaseBinding('Test Cases/TC_EnvironmentalTobaccoSmokeControl', 'Test Cases/TC_EnvironmentalTobaccoSmokeControl',  null), new TestCaseBinding('Test Cases/TC_FacilityMaintenanceandRenovationPolicy', 'Test Cases/TC_FacilityMaintenanceandRenovationPolicy',  null), new TestCaseBinding('Test Cases/TC_FundamentalRefregrantMgmt', 'Test Cases/TC_FundamentalRefregrantMgmt',  null), new TestCaseBinding('Test Cases/TC_GreenCleaning', 'Test Cases/TC_GreenCleaning',  null), new TestCaseBinding('Test Cases/TC_GreenCleaningPolicy', 'Test Cases/TC_GreenCleaningPolicy',  null), new TestCaseBinding('Test Cases/TC_GridHarmonization', 'Test Cases/TC_GridHarmonization',  null), new TestCaseBinding('Test Cases/TC_HeatIslandReduction', 'Test Cases/TC_HeatIslandReduction',  null)])
