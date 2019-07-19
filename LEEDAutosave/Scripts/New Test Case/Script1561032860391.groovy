import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable
import projectKeywords.LeedOnlineKeywords
//String x = findTestData("Data Files/TD_FundamentalRefrigerantMgmt").getColumnNames()

//println x



//new LeedOnlineKeywords().enter_TableData()

//String s = "Fundamental Refrigerant Management-ComprehensivePhaseOut";
//String p = s.substring(s.lastIndexOf("-") + 1)

//println "Valu is "+p

//new LeedOnlineKeywords().get_rowNumber_of_form()

/*String csv = "Java,Ruby,Python,Perl";

// step one : converting pipe separate String to array of String
// pipe is special character in regex, to use it literally enclose in
// bracket
String[] elements = csv.split("\\s*[,]\\s*");

// step two : convert String array to list of String
List<String> fixedLenghtList = Arrays.asList(elements);

// step three : copy fixed list to an ArrayList
ArrayList<String> listOfString = new ArrayList<String>(fixedLenghtList);

System.out.println("list from pipe delimitedd String : " + listOfString);

//new_obj = 

/*println "Size of array "+listOfString.size()
for(int i=0;i<listOfString.size;i++){
println "Array Value "+ listOfString[i]
}*/


/*for(value in listOfString){
	
	println value
}*/

String stringToSplit = "Fundamental Refrigerant Management-comprehensivePhaseOut#c"


String[] form_name = stringToSplit.split("#")
//println "count " +s.size()

String d = form_name[0].substring(form_name[0].lastIndexOf("-")+1)

println d




















