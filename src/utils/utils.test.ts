import { convertHoursToDate } from "./date"; // Modül yolunu doğru şekilde güncellemelisiniz.

test("convertHoursToDate converts time correctly", () => {
  const inputTime = "10:30"; // Saat ve dakika değeri
  const expectedDate = new Date();
  expectedDate.setHours(10);
  expectedDate.setMinutes(30);

  const convertedDateValue = convertHoursToDate(inputTime);

  expect(convertedDateValue).toBe(expectedDate.valueOf());
});
