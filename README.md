# Test Automation with Playwright

### Project: Automated QA Pipeline (Public Demo)

![Project Status](https://img.shields.io/badge/Status-Complete-green)
![Build Status](https://github.com/stevenstafford72/qa-automation-demo/actions/workflows/playwright.yml/badge.svg)
![Technologies](https://img.shields.io/badge/Technologies-Playwright%2C%20TypeScript%2C%20GitHub%20Actions-blue)

## Project Overview

This repository features a robust QA automation pipeline that validates key user flows and functionality on a web application. This project is a **public demo** created to showcase skills. The **original pipeline is a private repository** used for company purposes.

Built with **Playwright** and **TypeScript**, the pipeline is fully integrated with **GitHub Actions** to provide continuous quality assurance.

The goal of this project is to showcase the ability to:
* Design and implement a scalable, end-to-end test suite.
* Build a resilient test framework using industry-standard practices.
* Integrate automated testing into a CI/CD workflow for efficient, daily test runs.
* Generate comprehensive, stakeholder-friendly reports and real-time alerts.

## Key Features

* **Comprehensive Test Suite**: The pipeline runs **77 automated tests** covering critical user journeys, including user authentication, form submissions, and multi-page navigation.
* **CI/CD Integration**: Tests are automatically triggered on every push to the `main` branch via GitHub Actions. This provides immediate feedback and continuous quality checks.
* **Cross-Browser Testing**: The test suite executes across multiple browsers, including **Chromium, Firefox, WebKit, and Microsoft Edge**, to ensure broad compatibility.
* **Real-Time Alerts**: Test run summaries and statuses are sent to a dedicated Slack channel, providing real-time visibility to the team.
    
    
    
* **Detailed Reporting**: A comprehensive **Allure Report** is automatically generated upon completion of each test run, providing a detailed breakdown of test results, metrics, and logs for easy analysis.

## Technical Stack

* **Test Framework**: Playwright
* **Language**: TypeScript
* **CI/CD**: GitHub Actions
* **Reporting**: Allure Report
* **Alerts**: Slack Webhooks
* **Runtime**: Node.js

## Getting Started

To run the tests locally, follow these steps:

### Prerequisites

* Node.js (v14 or higher)
* npm (or yarn)

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/stevenstafford72/qa-automation-demo.git](https://github.com/stevenstafford72/qa-automation-demo.git)
    cd qa-automation-demo
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Tests

* **Run all tests**: `npx playwright test`
* **Run tests in UI mode**: `npx playwright test --ui`
* **Run a specific test file**: `npx playwright test tests/login.spec.ts`

### Viewing Reports

After running the tests locally, you can view the Allure Report by running:
`npx allure serve`

## Project Status & Contributions

This project is a personal demonstration of my skills and is complete. Feel free to explore the code, and please contact me if you have any questions.

* **LinkedIn**: [linkedin.com/in/stevenstafford](https://linkedin.com/in/stevenstafford)
* **Personal Website**: [stevenstafford.com](https://stevenstafford.com)
