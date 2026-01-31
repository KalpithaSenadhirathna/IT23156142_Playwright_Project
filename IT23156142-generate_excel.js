const XLSX = require('xlsx');

// Array of all 37 test cases
const testCases = [
  // ---------------- Positive Functional Test Cases ----------------
  {
    "TC ID": "Pos_Fun_0001",
    "Test case name": "Simple sentence",
    "Input length type": "S",
    "Input": "mama gedhara yanavaa.",
    "Expected output": "මම ගෙදර යනවා.",
    "Actual output": "මම ගෙදර යනවා.",
    "Status": "Pass",
    "Accuracy justification / Description": "Simple sentence correctly preserved.",
    "What is covered by the test": "Simple sentence; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0002",
    "Test case name": "Compound sentences (two ideas joined)",
    "Input length type": "s",
    "Input": "mama kadee yanavaa, haebaeyi ikmanata enavaa.",
    "Expected output": "මම කඩේ යනවා, හැබැයි ඉක්මනට එනවා.",
    "Actual output": "මම කඩේ යනවා, හැබැයි ඉක්මනට එනවා.",
    "Status": "Pass",
    "Accuracy justification / Description": "Compound sentence handled correctly.",
    "What is covered by the test": "Compound sentence; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0003",
    "Test case name": "Complex sentences (cause/effect)",
    "Input length type": "S",
    "Input": "oyaa enakan mama balan innavaa.",
    "Expected output": "ඔයා එනකන් මම බලන් ඉන්නවා.",
    "Actual output": "ඔයා එනකන් මම බලන් ඉන්නවා.",
    "Status": "Pass",
    "Accuracy justification / Description": "Complex sentence cause correctly converted.",
    "What is covered by the test": "Greeting / request / response; Interrogative; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0004",
    "Test case name": "Complex sentences (conditions)",
    "Input length type": "S",
    "Input": "vahina nisaa api heta yamu.",
    "Expected output": "වහින නිසා අපි හෙට යමු.",
    "Actual output": "වහින නිසා අපි හෙට යමු.",
    "Status": "Pass",
    "Accuracy justification / Description": "Complex condition sentence correctly converted.",
    "What is covered by the test": "Compound sentence; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0005",
    "Test case name": "Interrogative (questions) forms",
    "Input length type": "S",
    "Input": "oyaa sathutindha?",
    "Expected output": "ඔයා සතුටින්ද?",
    "Actual output": "ඔයා සතුටින්ද?",
    "Status": "Pass",
    "Accuracy justification / Description": "Interrogative question sentence handled correctly.",
    "What is covered by the test": "Word combination / phrase pattern; Complex sentence; L (≥300 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0006",
    "Test case name": "Imperative (commands) forms",
    "Input length type": "S",
    "Input": "dhaenma yanna.",
    "Expected output": "දැන්ම යන්න.",
    "Actual output": "දැන්ම යන්න.",
    "Status": "Pass",
    "Accuracy justification / Description": "Imperative commands sentence correctly converted.",
    "What is covered by the test": "Daily language usage; Interrogative; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0007",
    "Test case name": "Positive form",
    "Input length type": "S",
    "Input": "api heta yanavaa.",
    "Expected output": "අපි හෙට යනවා.",
    "Actual output": "අපි හෙට යනවා.",
    "Status": "Pass",
    "Accuracy justification / Description": "Positive form sentence correctly converted.",
    "What is covered by the test": "Daily language usage; Imperative; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0008",
    "Test case name": "Negative form",
    "Input length type": "S",
    "Input": "oyaa eeka hariyata karala naehae.",
    "Expected output": "ඔයා ඒක හරියට කරල නැහැ.",
    "Actual output": "ඔයා ඒක හරියට කරල නැහැ.",
    "Status": "Pass",
    "Accuracy justification / Description": "Negative form sentence correctly converted.",
    "What is covered by the test": "Daily language usage; Present tense; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0009",
    "Test case name": "Greetings",
    "Input length type": "s",
    "Input": "suba dhavasak!",
    "Expected output": "සුබ දවසක්!",
    "Actual output": "සුබ දවසක්!",
    "Status": "Pass",
    "Accuracy justification / Description": "Negative sentence correctly converted.",
    "What is covered by the test": "Daily language usage; Negative sentence; s (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0010",
    "Test case name": "request",
    "Input length type": "S",
    "Input": "magee paeena eyaata dhenna.",
    "Expected output": "මගේ පෑන එයාට දෙන්න.",
    "Actual output": "මගේ පෑන එයාට දෙන්න.",
    "Status": "Pass",
    "Accuracy justification / Description": "Polite request phrase correctly converted.",
    "What is covered by the test": "Greeting / request / response; Present tense; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0011",
    "Test case name": "Polite phrasing",
    "Input length type": "M",
    "Input": "oyaata puLuvannam karuNaakaralaa ehaata yanna.",
    "Expected output": "ඔයාට පුළුවන්නම් කරුණාකරලා එහාට යන්න.",
    "Actual output": "ඔයාට පුළුවන්නම් කරුණාකරලා එහාට යන්න.",
    "Status": "Pass",
    "Accuracy justification / Description": "Simple phrase correctly converted.",
    "What is covered by the test": "Polite phrasing; Simple sentence; M (31-299 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0012",
    "Test case name": "Responses",
    "Input length type": "S",
    "Input": "Hari, mama yannam.",
    "Expected output": "හරි, මම යන්නම්.",
    "Actual output": "හරි, මම යන්නම්.",
    "Status": "Pass",
    "Accuracy justification / Description": ".",
    "What is covered by the test": "Responses; Simple sentence; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0013",
    "Test case name": "Informal phrasing",
    "Input length type": "S",
    "Input": "sandhiipa, palayan ehaata.",
    "Expected output": "සන්දීප, පලයන් එහාට.",
    "Actual output": "සන්දීප, පලයන් එහාට.",
    "Status": "Pass",
    "Accuracy justification / Description": ".",
    "What is covered by the test": "Informal phrasing sentence; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0014",
    "Test case name": "Frequently used day-to-day expressions",
    "Input length type": "S",
    "Input": "mata badaginiyi.",
    "Expected output": "මට බඩගිනියි.",
    "Actual output": "මට බඩගිනියි.",
    "Status": "Pass",
    "Accuracy justification / Description": "",
    "What is covered by the test": "Frequently used day-to-day expressions; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0015",
    "Test case name": "Multi-word expressions and frequent collocations",
    "Input length type": "S",
    "Input": "mata dhenna.",
    "Expected output": "මට දෙන්න.",
    "Actual output": "මට දෙන්න.",
    "Status": "Pass",
    "Accuracy justification / Description": "Future tense correctly converted.",
    "What is covered by the test": "TMulti-word expressions and frequent collocation; S (≤30 characters); Accuracy validation"
  },
  {
    "TC ID": "Pos_Fun_0016",
    "Test case name": "Proper spacing",
    "Input length type": "S",
    "Input": "heta api gedhara yanavaa.",
    "Expected output": "හෙට අපි ගෙදර යනවා.",
    "Actual output": "හෙට අපි ගෙදර යනවා.",
    "Status": "Pass",
    "Accuracy justification / Description": "Future tense correctly converted.",
    "What is covered by the test": "Proper spacing sentence; S (≤30 characters); Accuracy validation"
  },
{
    "TC ID": "Pos_Fun_0017",
    "Test case name": "Missing spaces / joined words (stress test)",
    "Input length type": "S",
    "Input": "mamakadeayanavaa.",
    "Expected output": "මමකඩේයනවා.",
    "Actual output": "මමකඩේයනවා.",
    "Status": "Pass",
    "Accuracy justification / Description": "Future tense correctly converted.",
    "What is covered by the test": "Missing spaces / joined words; Future tense; S (≤30 characters); Accuracy validation"
  },
{
    "TC ID": "Pos_Fun_0018",
    "Test case name": "Repeated word expressions used for emphasis",
    "Input length type": "S",
    "Input": "hari hari",
    "Expected output": "හරි හරි",
    "Actual output": "හරි හරි",
    "Status": "Pass",
    "Accuracy justification / Description": "Future tense correctly converted.",
    "What is covered by the test": "Repeated word expressions used for emphasis; S (≤30 characters); Accuracy validation"
  },
{
    "TC ID": "Pos_Fun_0019",
    "Test case name": "Tense variation past",
    "Input length type": "S",
    "Input": "mama iiyee gamee giyaa.",
    "Expected output": "මම ඊයේ ගමේ ගියා.",
    "Actual output": "මම ඊයේ ගමේ ගියා.",
    "Status": "Pass",
    "Accuracy justification / Description": "past tense correctly converted.",
    "What is covered by the test": "Tense variation; past tense; S (≤30 characters); Accuracy validation"
  },{
    "TC ID": "Pos_Fun_0020",
    "Test case name": "Tense variation future",
    "Input length type": "S",
    "Input": "mama heta gamee yanavaa.",
    "Expected output": "මම හෙට ගමේ යනවා.",
    "Actual output": "මම හෙට ගමේ යනවා.",
    "Status": "Pass",
    "Accuracy justification / Description": "Simple sentence correctly converted.",
    "What is covered by the test": "Tense variation; Future tense; S (≤30 characters); Accuracy validation"
  },

 {
    "TC ID": "Neg_Fun_001",
    "Test case name": "Incorrect transliteration with mixed languag",
    "Input length type": "S",
    "Input": "api trip ekak  yanavaa ",
    "Expected output": "api trip ekak  yanavaa ",
    "Actual output": "අපි trip එකක් යනවා.",
    "Status": "Fail",
    "Accuracy justification / Description": "System fails to convert mixed language input correctly.",
    "What is covered by the test": "Mixed Singlish + English; Simple sentence; S (≤30 characters); Robustness validation"
  },
  {
    "TC ID": "Neg_Fun_002",
    "Test case name": "Numbers in input",
    "Input length type": "S",
    "Input": "mata paeen 5k dhenna.",
    "Expected output": "mata paeen 5k dhenna.",
    "Actual output": "මට පෑන් 5ක් දෙන්න.",
    "Status": "Fail",
    "Accuracy justification / Description": "System does not process inputs with numbers correctly.",
    "What is covered by the test": "Punctuation / numbers; Simple sentence; S (≤30 characters); Robustness validation"
  },
  {
    "TC ID": "Neg_Fun_003",
    "Test case name": "Special symbols in input",
    "Input length type": "S",
    "Input": "mama & paasal yanavaa.",
    "Expected output": "mama & paasal yanavaa.",
    "Actual output": "මම & පාසල් යනවා.",
    "Status": "Fail",
    "Accuracy justification / Description": "System does not process inputs with special symbols correctly.",
    "What is covered by the test": "Punctuation / numbers; Simple sentence; S (≤30 characters); Robustness validation"
  },
  {
    "TC ID": "Neg_Fun_004",
    "Test case name": "English only input with extra spaces",
    "Input length type": "S",
    "Input": "mama heta  udheema nuvara   yanavaa.",
    "Expected output": "mama heta  udheema nuvara   yanavaa.",
    "Actual output": "මම හෙට උදේම නුවර යනවා.",
    "Status": "Fail",
    "Accuracy justification / Description": "System fails to handle mixed capitalization in input correctly.",
    "What is covered by the test": "Typographical error handling; Simple sentence; S (≤30 characters); Robustness validation"
  },
  {
    "TC ID": "Neg_Fun_005",
    "Test case name": "Multiple spaces between words",
    "Input length type": "S",
    "Input": "chathura    sandhudaa   dhilli   giyeeya.",
    "Expected output": "chathura    sandhudaa   dhilli   giyeeya.",
    "Actual output": "චතුර    සන්දුඩා   දිල්ලි   ගියේය.",
    "Status": "Fail",
    "Accuracy justification / Description": "System fails to normalize multiple spaces into single space during conversion.",
    "What is covered by the test": "Typographical error handling; Simple sentence; S (≤30 characters); Robustness validation"
  },
  {
    "TC ID": "Neg_Fun_006",
    "Test case name": "Unsupported punctuation combination",
    "Input length type": "S",
    "Input": "mama office yanavaa!!!??",
    "Expected output": "මම ඔෆිස් යනවා!!!??",
    "Actual output": "මම office යනවා!!!??",
    "Status": "Fail",
    "Accuracy justification / Description": "System fails to convert text correctly when multiple punctuation marks are combined.",
    "What is covered by the test": "Punctuation / numbers; Simple sentence; S (≤30 characters); Robustness validation"
  },
  {
    "TC ID": "Neg_Fun_007",
    "Test case name": "Long input with repeated words",
    "Input length type": "L",
    "Input": "ov ov".repeat(50),
    "Expected output": "ඔව් ඔව්".repeat(50),
    "Actual output": "ov ov".repeat(50),
    "Status": "Fail",
    "Accuracy justification / Description": "System fails to handle repeated words for emphasis in long input.",
    "What is covered by the test": "Repeated word expressions; L (≥300 characters); Robustness validation"
  },
  {
    "TC ID": "Neg_Fun_008",
    "Test case name": "Numbers + special characters in long text",
    "Input length type": "S",
    "Input": "oyaa 2nd floor ekee lab ekata 2.30ta kalin enna.",
    "Expected output": "oyaa 2nd floor ekee lab ekata 2.30ta kalin enna.",
    "Actual output": "ඔයා 2න්ඩ් floor එකේ lab එකට 2.30ට කලින් එන්න.",
    "Status": "Fail",
    "Accuracy justification / Description": "System fails to process long inputs with numbers and special characters correctly.",
    "What is covered by the test": "Punctuation / numbers; S (≤30 characters); Robustness validation"
  },

 

  // ---------------- Positive UI Test Cases ----------------
  {
    "TC ID": "Pos_UI_0001",
    "Test case name": "Sinhala output clears correctly when input is cleared",
    "Input length type": "S",
    "Input": "mata yanna oona.",
    "Expected output": "මට යන්න ඕන.",
    "Actual output": "මට යන්න ඕන.",
    "Status": "Pass",
    "Accuracy justification / Description": "Real-time output appears in correctly.",
    "What is covered by the test": "Usability flow (real-time conversion); Simple sentence; S (≤30 characters); Real-time output update behavior"
  },
  {
    "TC ID": "Pos_UI_0002",
    "Test case name": "Asking for help",
    "Input length type": "S",
    "Input": "mama obata paara pennannadha?",
    "Expected output": "මම ඔබට පාර පෙන්නන්නද?",
    "Actual output": "මම ඔබට පාර පෙන්නන්නද?",
    "Status": "Pass",
    "Accuracy justification / Description": "Sentence transliterated correctly with proper spelling.",
    "What is covered by the test": "Input Type: Sentence / Grammar Focus: Daily activities / Length: Short / Quality: Accuracy"
  },
   {
    "TC ID": "Pos_UI_0003",
    "Test case name": "Greeting sentence",
    "Input length type": "S",
    "Input": "suBha aluth avurudhdhak veevaa!!!",
    "Expected output": "සුභ අලුත් අවුරුද්දක් වේවා!!!",
    "Actual output": "සුභ අලුත් අවුරුද්දක් වේවා!!!",
    "Status": "Pass",
    "Accuracy justification / Description": "Sentence transliterated correctly with proper spelling.",
    "What is covered by the test": "Input Type: Sentence / Grammar Focus: Greetings / Length: Short / Quality: Accuracy"
  }, {
    "TC ID": "Pos_UI_0004",
    "Test case name": "Simple question",
    "Input length type": "S",
    "Input": "oba sathutindha?",
    "Expected output": "ඔබ සතුටින්ද?",
    "Actual output": "ඔබ සතුටින්ද?",
    "Status": "Pass",
    "Accuracy justification / Description": "Sentence transliterated correctly with proper spelling.",
    "What is covered by the test": "Input Type: Sentence / Grammar Focus: Greetings / Length: Short / Quality: Accuracy"
  }, {
    "TC ID": "Pos_UI_0005",
    "Test case name": "Future activity sentence",
    "Input length type": "S",
    "Input": "mama labana sathiyee rata yanavaa.",
    "Expected output": "මම ලබන සතියේ රට යනවා.",
    "Actual output": "මම ලබන සතියේ රට යනවා.",
    "Status": "Pass",
    "Accuracy justification / Description": "Sentence transliterated correctly with proper spelling.",
    "What is covered by the test": "Input Type: Sentence / Grammar Focus: Greetings / Length: Short / Quality: Accuracy"
  },

  // ---------------- Negative UI Test Cases ----------------
  {
    "TC ID": "Neg_UI_0001",
    "Test case name": "UI lag with long input",
    "Input length type": "L",
    "Input": "oba ".repeat(50),
    "Expected output": "oba ".repeat(50),
    "Actual output": "ඔබ ".repeat(50),
    "Status": "Fail",
    "Accuracy justification / Description": "Long input causes UI lag.",
    "What is covered by the test": "Usability flow; L (≥300 characters); Real-time output update behavior"
  },{
    "TC ID": "Neg_UI_0002",
    "Test case name": "Incorrect Sinhala output",
    "Input length type": "S",
    "Input": "oyaa enavadha? ",
    "Expected output": "oyaa enavadha?",
    "Actual output": "ඔයා එනවද?",
    "Status": "Fail",
    "Accuracy justification / Description": "Incorrect Sinhala output generated.",
    "What is covered by the test": "Daily language usage; Interrogative (question); S (≤30 characters); Real-time output update behavior"
  },{
    "TC ID": "Neg_UI_0003",
    "Test case name": "Incorrect Sinhala output",
    "Input length type": "M",
    "Input": " oyaa yanne naedhdha?",
    "Expected output": "oyaa yanne naedhdha? ",
    "Actual output": "ඔයා යන්නෙ නැද්ද? ",
    "Status": "Fail",
    "Accuracy justification / Description": "Incorrect Sinhala output generated.",
    "What is covered by the test": "Daily language usage; Sentence structure; M (≥30 characters); Real-time output update behavior"
  }

  
];

// Create workbook
const wb = XLSX.utils.book_new();
const ws = XLSX.utils.json_to_sheet(testCases);
XLSX.utils.book_append_sheet(wb, ws, "TestCases");

// Write the Excel file
XLSX.writeFile(wb, "IT23156142 - IT3040_TestCases.xlsx");
console.log("Excel file generated successfully!");

