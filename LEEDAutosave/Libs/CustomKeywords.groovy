
/**
 * This class is generated automatically by Katalon Studio and should not be modified or deleted.
 */

import java.lang.String

import com.kms.katalon.core.testobject.TestObject

import org.openqa.selenium.remote.HttpCommandExecutor

import org.openqa.selenium.remote.SessionId

import com.relevantcodes.extentreports.ExtentTest


def static "projectKeywords.LeedOnlineKeywords.navigate_to_form"(
    	String formName	) {
    (new projectKeywords.LeedOnlineKeywords()).navigate_to_form(
        	formName)
}

def static "projectKeywords.LeedOnlineKeywords.UploadFiles_to_Addfile"(
    	int addFileIndex	) {
    (new projectKeywords.LeedOnlineKeywords()).UploadFiles_to_Addfile(
        	addFileIndex)
}

def static "projectKeywords.LeedOnlineKeywords.fill_narrative"(
    	String narrative_framexpath	) {
    (new projectKeywords.LeedOnlineKeywords()).fill_narrative(
        	narrative_framexpath)
}

def static "projectKeywords.LeedOnlineKeywords.select_radio_button"(
    	TestObject radio_xpath	) {
    (new projectKeywords.LeedOnlineKeywords()).select_radio_button(
        	radio_xpath)
}

def static "projectKeywords.LeedOnlineKeywords.enter_TextBox_Data"(
    	TestObject textbox_object	) {
    (new projectKeywords.LeedOnlineKeywords()).enter_TextBox_Data(
        	textbox_object)
}

def static "projectKeywords.LeedOnlineKeywords.enter_data_to_textbox_rtl"(
    	TestObject rtl_text	) {
    (new projectKeywords.LeedOnlineKeywords()).enter_data_to_textbox_rtl(
        	rtl_text)
}

def static "projectKeywords.LeedOnlineKeywords.select_checkBox"(
    	TestObject checkbox_object	) {
    (new projectKeywords.LeedOnlineKeywords()).select_checkBox(
        	checkbox_object)
}

def static "projectKeywords.LeedOnlineKeywords.get_rowNumber_of_form"(
    	String form_name	
     , 	String ratingSys	) {
    (new projectKeywords.LeedOnlineKeywords()).get_rowNumber_of_form(
        	form_name
         , 	ratingSys)
}

def static "projectKeywords.LeedOnlineKeywords.enter_TableData"(
    	String table_name	
     , 	String testData	
     , 	String isAddRow	) {
    (new projectKeywords.LeedOnlineKeywords()).enter_TableData(
        	table_name
         , 	testData
         , 	isAddRow)
}

def static "projectKeywords.LeedOnlineKeywords.click_save_button"() {
    (new projectKeywords.LeedOnlineKeywords()).click_save_button()
}

def static "projectKeywords.LeedOnlineKeywords.countRowsPerPage"(
    	String xpath	) {
    (new projectKeywords.LeedOnlineKeywords()).countRowsPerPage(
        	xpath)
}

def static "projectKeywords.LeedOnlineKeywords.setDownloadPath"() {
    (new projectKeywords.LeedOnlineKeywords()).setDownloadPath()
}

def static "projectKeywords.LeedOnlineKeywords.isFiledownloaded"(
    	String downloadPath	
     , 	String fileName	) {
    (new projectKeywords.LeedOnlineKeywords()).isFiledownloaded(
        	downloadPath
         , 	fileName)
}

def static "projectKeywords.LeedOnlineKeywords.click_mark_as_complete"(
    	String formName	) {
    (new projectKeywords.LeedOnlineKeywords()).click_mark_as_complete(
        	formName)
}

def static "projectKeywords.LeedOnlineKeywords.delete_uploaded_files"(
    	int fileIndex	) {
    (new projectKeywords.LeedOnlineKeywords()).delete_uploaded_files(
        	fileIndex)
}

def static "projectKeywords.LeedOnlineKeywords.download_the_uploaded_files"(
    	int fileIndex	) {
    (new projectKeywords.LeedOnlineKeywords()).download_the_uploaded_files(
        	fileIndex)
}

def static "projectKeywords.LeedOnlineKeywords.deleteDownloadedFiles"(
    	String downloadPath	) {
    (new projectKeywords.LeedOnlineKeywords()).deleteDownloadedFiles(
        	downloadPath)
}

def static "projectKeywords.LeedOnlineKeywords.fill_date_field"() {
    (new projectKeywords.LeedOnlineKeywords()).fill_date_field()
}

def static "projectKeywords.LeedOnlineKeywords.checkbox_getXpath"(
    	String nameAttr	
     , 	String checkBoxType	) {
    (new projectKeywords.LeedOnlineKeywords()).checkbox_getXpath(
        	nameAttr
         , 	checkBoxType)
}

def static "projectKeywords.LeedOnlineKeywords.generateRandomString"(
    	int strLen	) {
    (new projectKeywords.LeedOnlineKeywords()).generateRandomString(
        	strLen)
}

def static "projectKeywords.LeedOnlineKeywords.sendCommandForDownloadChromeHeadLess"(
    	HttpCommandExecutor driverCommandExecutor	
     , 	SessionId sessionId	
     , 	String downloadPath	) {
    (new projectKeywords.LeedOnlineKeywords()).sendCommandForDownloadChromeHeadLess(
        	driverCommandExecutor
         , 	sessionId
         , 	downloadPath)
}

def static "projectKeywords.LeedOnlineKeywords.IsFileExist"(
    	TestObject fileNameObject	) {
    (new projectKeywords.LeedOnlineKeywords()).IsFileExist(
        	fileNameObject)
}

def static "projectKeywords.LeedOnlineKeywords.IsChecked"(
    	String xpath	) {
    (new projectKeywords.LeedOnlineKeywords()).IsChecked(
        	xpath)
}

def static "projectKeywords.LeedOnlineKeywords.clear_draft"() {
    (new projectKeywords.LeedOnlineKeywords()).clear_draft()
}

def static "projectKeywords.LeedOnlineKeywords.get_narrative_text"() {
    (new projectKeywords.LeedOnlineKeywords()).get_narrative_text()
}

def static "projectKeywords.LeedOnlineKeywords.click_pdf_Icon"() {
    (new projectKeywords.LeedOnlineKeywords()).click_pdf_Icon()
}

def static "projectKeywords.LeedOnlineKeywords.readPdf"() {
    (new projectKeywords.LeedOnlineKeywords()).readPdf()
}

def static "projectKeywords.LeedOnlineKeywords.verify_narrative_text_fromPdf"(
    	int index	) {
    (new projectKeywords.LeedOnlineKeywords()).verify_narrative_text_fromPdf(
        	index)
}

def static "projectKeywords.LeedOnlineKeywords.verify_text_value_fromPdf"(
    	TestObject textObj	) {
    (new projectKeywords.LeedOnlineKeywords()).verify_text_value_fromPdf(
        	textObj)
}

def static "projectKeywords.LeedOnlineKeywords.verify_pdf_table"(
    	int index	) {
    (new projectKeywords.LeedOnlineKeywords()).verify_pdf_table(
        	index)
}

def static "projectKeywords.LeedOnlineKeywords.deletePdfFile"() {
    (new projectKeywords.LeedOnlineKeywords()).deletePdfFile()
}

def static "projectKeywords.LeedOnlineKeywords.check_revisionIcon"() {
    (new projectKeywords.LeedOnlineKeywords()).check_revisionIcon()
}

def static "projectKeywords.LeedOnlineKeywords.takeScreenshot"(
    	ExtentTest logger	) {
    (new projectKeywords.LeedOnlineKeywords()).takeScreenshot(
        	logger)
}

def static "projectKeywords.LeedOnlineKeywords.getBrowserName"() {
    (new projectKeywords.LeedOnlineKeywords()).getBrowserName()
}

def static "extentKeywords.ExtentKeyReports.takeScreenshot"(
    	ExtentTest logger	) {
    (new extentKeywords.ExtentKeyReports()).takeScreenshot(
        	logger)
}
