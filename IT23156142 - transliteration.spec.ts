import { test, expect } from '@playwright/test';

test.describe('Sinhala Transliteration - 37 Test Cases', () => {

  const testCases = [

    // ================= POSITIVE FUNCTIONAL =================
    { id: "Pos_Fun_0001", name: "Simple sentence", input: "mama gedhara yanavaa.", expected: "මම ගෙදර යනවා." },
    { id: "Pos_Fun_0002", name: "Compound sentences (two ideas joined)", input: "mama kadee yanavaa, haebaeyi ikmanata enavaa.", expected: "මම කඩේ යනවා, හැබැයි ඉක්මනට එනවා." },
    { id: "Pos_Fun_0003", name: "Complex sentences (cause/effect)", input: "oyaa enakan mama balan innavaa.", expected: "ඔයා එනකන් මම බලන් ඉන්නවා." },
    { id: "Pos_Fun_0004", name: "Complex sentences (conditions)", input: "vahina nisaa api heta yamu.", expected: "වහින නිසා අපි හෙට යමු." },
    { id: "Pos_Fun_0005", name: "Interrogative (questions) forms", input: "oyaa sathutindha?", expected: "ඔයා සතුටින්ද?" },
    { id: "Pos_Fun_0006", name: "Imperative (commands) forms", input: "dhaenma yanna.", expected: "දැන්ම යන්න." },
    { id: "Pos_Fun_0007", name: "Positive form", input: "api heta yanavaa.", expected: "අපි හෙට යනවා." },
    { id: "Pos_Fun_0008", name: "Negative form", input: "oyaa eeka hariyata karala naehae.", expected: "ඔයා ඒක හරියට කරල නැහැ." },
    { id: "Pos_Fun_0009", name: "Greeting", input: "suba dhavasak!", expected: "සුබ දවසක්!" },
    { id: "Pos_Fun_0010", name: "request", input: "magee paeena eyaata dhenna.", expected: "මගේ පෑන එයාට දෙන්න." },
    { id: "Pos_Fun_0011", name: "Polite phrasing", input: "oyaata puLuvannam karuNaakaralaa ehaata yanna.", expected: "ඔයාට පුළුවන්නම් කරුණාකරලා එහාට යන්න." },
    { id: "Pos_Fun_0012", name: "Responses", input: "Hari, mama yannam.", expected: "හරි, මම යන්නම්." },
    { id: "Pos_Fun_0013", name: "Informal phrasing", input: "sandhiipa, palayan ehaata.", expected: "සන්දීප, පලයන් එහාට." },
    { id: "Pos_Fun_0014", name: "Frequently used day-to-day expressions", input:  "mata badaginiyi.", expected: "මට බඩගිනියි." },
    { id: "Pos_Fun_0015", name: "Multi-word expressions and frequent collocations", input: "mata dhenna.", expected: "මට දෙන්න." },
    { id: "Pos_Fun_0016", name: "Proper spacing", input: "heta api gedhara yanavaa.", expected: "හෙට අපි ගෙදර යනවා." },
    { id: "Pos_Fun_0017", name: "Missing spaces / joined words (stress test)", input: "mamakadeayanavaa.", expected: "මමකඩේයනවා." },
    { id: "Pos_Fun_0018", name: "Repeated word expressions used for emphasis", input: "hari hari", expected: "හරි හරි" },
    { id: "Pos_Fun_0019", name: "Tense variation past", input: "mama iiyee gamee giyaa.", expected: "මම ඊයේ ගමේ ගියා." },
    { id: "Pos_Fun_0020", name: "Tense variation future", input: "mama heta gamee yanavaa.", expected: "මම හෙට ගමේ යනවා." },

    // ================= NEGATIVE FUNCTIONAL =================
    { id: "Neg_Fun_0001", name: "Mixed input", input: "api trip ekak  yanavaa", expected: "api trip ekak  yanavaa" },
    { id: "Neg_Fun_0002", name: "Numbers in input", input: "mata paeen 5k dhenna.", expected: "mata paeen 5k dhenna." },
    { id: "Neg_Fun_0003", name: "Special characters", input: "mama @ paasal yanavaa.", expected: "mama @ paasal yanavaa." },
    { id: "Neg_Fun_0004", name: "English only", input: "mama heta  udheema nuvara   yanavaa.", expected: "mama heta  udheema nuvara   yanavaa." },
    { id: "Neg_Fun_0005", name: "Multiple spaces", input: "chathura    sandhudaa   dhilli   giyeeya.", expected: "chathura    sandhudaa   dhilli   giyeeya." },
    { id: "Neg_Fun_0006", name: "Mixed input", input: "mama office yanavaa!!!??", expected: "mama office yanavaa!!!??" },
    { id: "Neg_Fun_0007", name: "Very long input", input: "ov ov ov ov ovov ov ovov ov ovov ov ov ov ov ov ov vo ovov ov", expected: "ov ov ov ov ovov ov ovov ov ovov ov ov ov ov ov ov vo ovov ov" },
    { id: "Neg_Fun_0008", name: "Numbers + special characters ", input: "oyaa 2nd floor ekee lab ekata 2.30ta kalin enna.", expected: "oyaa 2nd floor ekee lab ekata 2.30ta kalin enna." },

    // ================= POSITIVE UI =================
    { id: "Pos_UI_0001", name: "", input: "mata yanna oona.", expected: "මට යන්න ඕන." },
    { id: "Pos_UI_0002", name: "Simple future plan", input: "mama obata paara pennannadha?", expected: "මම ඔබට පාර පෙන්නන්නද?" },
    { id: "Pos_UI_0003", name: "", input: "suBha aluth avurudhdhak veevaa!!!", expected: "සුභ අලුත් අවුරුද්දක් වේවා!!!" },
    { id: "Pos_UI_0004", name: "Text selection", input: "oba sathutindha?", expected: "ඔබ සතුටින්ද?" },
    { id: "Pos_UI_0005", name: "Responsive display", input: "mama labana sathiyee rata yanavaa.", expected: "මම ලබන සතියේ රට යනවා." },

    // ================= NEGATIVE UI =================
    { id: "Neg_UI_0001", name: "Long UI lag", input: "oba oba oba oba oba oba oba oba oba oba", expected: "oba oba oba oba oba oba oba oba oba oba" },
    { id: "Neg_UI_0002", name: "Overflow handling", input: "oyaa enavadha?", expected: "oyaa enavadha? " },
    { id: "Neg_UI_0003", name: "Page reload behavior", input: "oyaa yanne naedhdha? ", expected: "oyaa yanne naedhdha? " },
   
  ];

  for (const tc of testCases) {
  test(`${tc.id} - ${tc.name}`, async ({ page }) => {

    // 1. Navigate to the Swift Translator website
    await page.goto('https://www.swifttranslator.com/');

    // 2. Select the Singlish input textarea (using placeholder)
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';

    // Use chunked typing to simulate real user input so the site's IME processes sequences correctly.
    await page.fill(inputSelector, '');
    await inputArea.click();
    const text = tc.input;
    const CHUNK = 200; // characters per chunk to avoid Playwright typing timeouts
    if (text.length === 0) {
      // nothing to type
    } else if (text.length <= CHUNK) {
      await inputArea.type(text, { delay: 35 });
    } else {
      for (let i = 0; i < text.length; i += CHUNK) {
        const chunk = text.slice(i, i + CHUNK);
        await inputArea.type(chunk, { delay: 25 });
        // allow the page to process chunk
        await page.waitForTimeout(100);
      }
    }
    // Ensure compositionend/input events fired after typing
    await page.evaluate((sel) => {
      const el = document.querySelector(sel) as HTMLTextAreaElement | null;
      if (!el) return;
      el.dispatchEvent(new CompositionEvent('compositionend', { bubbles: true, cancelable: true, data: el.value }));
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }, inputSelector);

    // Special handling for the Clear-input UI test: click the first Clear button found
    if (tc.id === 'Pos_UI_0002') {
      const clearLocator = page.getByRole('button', { name: /clear/i });
      try {
        await clearLocator.first().click();
      } catch (err) {
        // Fallback: select-all + delete
        await inputArea.click();
        const modifier = process.platform === 'darwin' ? 'Meta' : 'Control';
        await page.keyboard.press(`${modifier}+A`);
        await page.keyboard.press('Backspace');
      }
    }

    // 3. Select the output box
    // Based on your HTML, it's a div with bg-slate-50 following the "Sinhala" title
    const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');

    // 4. Wait for the translation to appear (it's automatic)
    // We wait until the text content matches or contains our expected value
    // Allow more time for conversion on slower environments
    await expect(outputBox).toContainText(tc.expected, { timeout: 10000 });

    const output = await outputBox.textContent();
    console.log(`Running: ${tc.id} | Result: ${output}`);

    expect(output).toContain(tc.expected);
  });
}

});