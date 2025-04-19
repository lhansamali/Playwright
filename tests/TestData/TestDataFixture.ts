import { test as base } from '@playwright/test';

type TestData = {
  email: string;
  password: string;
};

export const test = base.extend<{
  testData: TestData;
}>({
  testData: async ({}, use) => {
    const data = {
      email: 'customer@practicesoftwaretesting.com',
      password: 'welcome01'
    };
    await use(data);
  }
});

export const expect=test.expect;

