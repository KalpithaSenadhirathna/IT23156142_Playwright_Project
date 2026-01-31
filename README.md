PLAYWRIGHT AUTOMATION TESTING PROJECT
Institute: SLIIT
Student ID: IT23156142


PROJECT OVERVIEW
----------------
This project, which utilizes Playwright for automating the tests, has been developed with the intention of automating a web application, which can translate Singlish to Sinhala characters. It tests the application's functional accuracy as well as the user interface to ensure a smooth user experience. It has been developed based on the SLIIT guidelines for testing.


PROJECT OBJECTIVES
------------------
-- Validate correct Sinhala transliteration for valid Singlish input.
-- Identify system behavior for invalid or unsupported input
-- Verify UI responsiveness and real-time output updates
-- Apply Playwright best practices in test automation


TECHNOLOGIES USED
-----------------
- Playwright Test Framework
- TypeScript
- Node.js
- Chromium  browser
- Visual Studio Code
- Git and GitHub


APPLICATION UNDER TEST
----------------------
Website: https://www.swifttranslator.com/

Feature Tested:
- Singlish to Sinhala Transliteration
- Real-time output rendering
- UI input and output behavior


PROJECT FOLDER STRUCTURE
------------------------
IT23156210_Playwright_Project/

|-- tests/
|   |-- IT23156142 - IT3040_TestCases.xlsx
|   |-- IT23156142 - transliteration.spec.ts
|   |-- IT23156142-generate_excel.js
|
|
|-- GitRepositoryLink.txt
|-- package-lock.json
|-- package.json
|-- playwright.config.ts
|-- README.txt

TEST CASE COVERAGE
------------------
The automation suite includes 37 test cases categorized as:

- Positive Functional Test Cases
- Negative Functional Test Cases
- Positive UI Test Cases
- Negative UI Test Cases

Each test case includes an ID, Test case name,Input length type, input data, expected output, actual
output, and execution status,Accuracy justification / Description,What is covered by the test.



TEST IMPLEMENTATION DETAILS
---------------------------
- Tests are written using Playwright Test with TypeScript
- A data-driven approach is used by storing all test cases in an array
- Tests are dynamically generated using a loop
- Input is typed in chunks to simulate real user behavior
- Composition and input events are manually triggered to support IME-based
  transliteration processing
- Assertions validate that the output contains the expected Sinhala text


INSTALLATION AND SETUP
----------------------
Prerequisites:
- Node.js (LTS version)
- Git
- Visual Studio Code


Step 1: Open the project folder in your terminal or IDE

Step 2: Install dependencies
npm install

Step 3: Run Playwright tests
npx playwright test



RUNNING THE TESTS
-----------------
Run all tests:
npx playwright test


TEST REPORTING
--------------
After execution, Playwright generates an HTML report.

To view the report:
npx playwright show-report

The report includes:
- Test execution summary
- Passed and failed test cases
- Execution time
- Screenshots for failed tests
- Error logs


BEST PRACTICES FOLLOWED
----------------------
- Web-first assertions using expect()
- No hard-coded waits
- Auto-wait handling
- Data-driven test design
- Clear test case naming with unique IDs
- Cross-browser compatible selectors
- Edge case validation


NOTES FOR EVALUATORS
-------------------
- The GitHub repository is publicly accessible
- All tests can be executed using the provided instructions
- No additional configuration is required
- Test cases are documented using the SLIIT Excel template (Appendix 2)
- The project follows SLIIT academic integrity policies
- All code and documentation are original and plagiarism-free


REFERENCES
----------
Playwright Documentation: https://playwright.dev
Playwright API Reference: https://playwright.dev/docs/api/class-playwright

