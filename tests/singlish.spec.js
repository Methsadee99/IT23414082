import { test, expect } from '@playwright/test';
const link = 'https://www.swifttranslator.com/';

// ---------- POSITIVE FUNCTIONAL TEST CASES ----------

test('Pos_Fun_0001 - Convert a short request phrase', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mata gedharata yanna puLuvandha?')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මට ගෙදරට යන්න පුළුවන්ද?")
});

test('Pos_Fun_0002 - Convert a short daily greeting phrase', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('suBha udhaeesanak !')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("සුභ උදෑසනක් !")
});

test('Pos_Fun_0003 - Short mixed-language input', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('api heta bus ekee yamu ')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("අපි හෙට bus එකේ යමු")
});

test('Pos_Fun_0004 - Convert a short request phrase', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('karuNaakara mata obagee paasala kiyanna?')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("කරුණාකර මට ඔබගේ පාසල කියන්න? ")
});

test('Pos_Fun_0005 - Long mixed-language input', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mata adha meeting ekee Zoom link eka email ekak vidhihata evanna puLuvandha?')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මට අද meeting එකේ Zoom link එක email එකක් විදිහට එවන්න පුළුවන්ද?")
});

test('Pos_Fun_0006 - Correct spacing', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mama iiyee oyaava paaredhi dhaekkaa ')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මම ඊයේ ඔයාව පාරෙදි දැක්කා")
});

test('Pos_Fun_0007 - Convert polite phrasing', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('api bath kanna yamudha?')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("අපි බත් කන්න යමුද?")
});

test('Pos_Fun_0008 - Convert imperative sentence', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('vahaama car eka Lagata yanna ')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("වහාම car එක ළගට යන්න")
});

test('Pos_Fun_0009 - Frequent expression conversion', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mata baya hithenavaa ')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මට බය හිතෙනවා")
});

test('Pos_Fun_00010 - Repeated word emphasis', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('hari hari ennam ')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("හරි හරි එන්නම්")
});

test('Pos_Fun_00011 - Tense variation future', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mama heta enavaa')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මම හෙට එනවා")
});

test('Pos_Fun_00012 - Tense variation present', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mama dhaen paadam karanavaa ')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මම දැන් පාඩම් කරනවා")
});

test('Pos_Fun_00013 - Tense variation past', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mama iiyee pansal giyaa ')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මම ඊයේ පන්සල් ගියා ")
});

test('Pos_Fun_00014 - Convert a complex sentence', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mama dhaen gedhara yanna hadhanne mokadha vahinna ena nisaa ')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මම දැන් ගෙදර යන්න හදන්නෙ මොකද වහින්න එන නිසා ")
});

test('Pos_Fun_00015 - Convert a complex sentence', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mama kaeema kaeevata passe panthiyata yanavaa ')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මම කෑම කෑවට පස්සෙ පන්තියට යනවා ")
});

test('Pos_Fun_00016 - Convert a paragraph to singlish to sinhala', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('adha udhaeesana koLaBA kotuva dhumriya sThaanaya asala udhgooShaNayak paevathvuni. emagin dhaedi rathavaahana thadhabadhayak athi vuu athara polisiya maedhihath vee eya paalanaya kiriimata uthsaha kaLeeya. mema udhgooShaNaya sQQviDhaayana kara aeththee guru vRUthathiiya samithi visinya. ovunta labaa dhiimata porondhu vuu dhiimana laba nodhiima nisaaya. pasuva polisiya madhihath vii samaThayakata path kaLeeya.')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("අද උදෑසන කොළඹ කොටුව දුම්රිය ස්ථානය අසල උද්ගෝෂණයක් පැවත්වුනි. එමගින් දැඩි රතවාහන තදබදයක් අති වූ අතර පොලිසිය මැදිහත් වේ එය පාලනය කිරීමට උත්සහ කළේය. මෙම උද්ගෝෂණය සංවිධායන කර ඇත්තේ ගුරු වෘතතීය සමිති විසින්ය. ඔවුන්ට ලබා දීමට පොරොන්දු වූ දීමන ලබ නොදීම නිසාය. පසුව පොලිසිය මදිහත් වී සමථයකට පත් කළේය.")
});

test('Pos_Fun_00017  - Convert positive sentence', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mama ehema karanavaa')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මම එහෙම කරනවා")
});

test('Pos_Fun_00018 - Convert a short daily response phrase', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('ov hari, ehema karamu')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("ඔව් හරි, එහෙම කරමු")
});

test('Pos_Fun_00019 - Covert multi-word expressions and frequent collocations ', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('gihin enna')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("ගිහින් එන්න")
});

test('Pos_Fun_00020 -  Covert the date and time', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('meeka unee janavaari 6 venidhaa 12.00pm valata vagee')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මේක උනේ ජනවාරි 6 වෙනිදා 12.00pm වලට වගේ")
});

test('Pos_Fun_00021 - Convert Malti-line (line breaks)', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mama yanavaa\noyath enavadha?' )
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මම යනවා\nඔයත් එනවද? ")
});


test('Pos_Fun_00022 - Short mixed-language input', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('maava whatsapp group ekata add karanavadha?')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මාව whatsapp group එකට add කරනවද?")
});

test('Pos_Fun_00023 - Handle Punctuation marks', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('wow! oyaa hari dhakshayi ne ')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("wow! ඔයා හරි දක්ශයි නේ ")
});

test('Pos_Fun_00024 - Handle long mixed-language paragraph', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('adha ITPM lecture eka online lu thiyenne teams ekakin lu thiyenne eke link eka course web ekea dhaanavaa kivvaa.madam kivvaa adha thiyana lesson eka very important kiyalaa. Eka nisaa oyalaa haemooma join venna.')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("අද ITPM lecture එක online ලු තියෙන්නෙ teams එකකින් ලු තියෙන්නෙ eke link එක course web එකේ දානවා කිව්වා.madam කිව්වා අද තියන lesson එක very important කියලා. එක නිසා ඔයලා හැමෝම join වෙන්න.")
});

// ---------- NEGATIVE FUNCTIONAL TEST CASES ----------

test('Neg_Fun_0001- Handle long mixed-language paragraph', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('ela !! thanks machan')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("එල !! තැන්ක්ස් machan")
});

test('Neg_Fun_0002- Incorrect spacing', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mamadhaengedharayanavaa')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මම දැන් ගෙදර යනවා ")
});

test('Neg_Fun_0003- Overly long unformatted text', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mamamama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama\n mama mama mama mama mama mama mama mama mama ')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම")
});

test('Neg_Fun_0004- Invalid characters', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mama!!! karanavaa??')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මම කරනවා!!!")
});

test('Neg_Fun_0005- Handle Typographical error', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mmaa gedhraa yannava')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මම ගෙදර යනවා")
});

test('Neg_Fun_0006- Unsupported emoji input', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mama oyath ekkaaa yaaLuyi ')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මම ඔයත් එක්ක යාළුයි ")
});

test('Neg_Fun_0007- Empty input', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill(' ')
  await expect(page.locator('div.bg-slate-50')).toHaveText(" - ")
});

test('Neg_Fun_0008- Invalid punctuation sequence', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mama!!! karanavaa??')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මම කරනවා!!!")
});

test('Neg_Fun_0009- Handle Informal phrasing', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('ooyi hitapanko ooi')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("ඕයි හිටපන්කො ඕයි")
});

test('Neg_Fun_00010- multiple punctuation with negations ', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('Mata eeka ??  karanna baee !!')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මට ඒක කරන්න බෑ !!")
});

// ---------- POSITIVE UI TEST CASES ----------

test('Pos_UI_0001- Real-time output update ', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mama kaeema kanna yanavaa')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("මම කෑම කන්න යනවා ")
});

test('Pos_UI_0002- Clear input field ', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('mata bath oonee')
    await page.getByLabel('Clear').click();
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("")
});

// ---------- NEGATIVE UI TEST CASES ----------


test('Neg_UI_0001- Output not updated after page reload ', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('man pasal yanavaa')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("man පාසල් යනවා")
});

test('Neg_UI_000- Text overflow with small window', async ({ page }) => {
  await page.goto(link);
  await page.getByPlaceholder('Input Your Singlish Text Here').fill('oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya oya')
  await page.waitForTimeout(2000);
  await expect(page.locator('div.bg-slate-50')).toHaveText("ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා ඔයා")
});



