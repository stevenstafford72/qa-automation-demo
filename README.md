🚀 QA Automation Pipeline Demo 

End-to-end test automation framework built with **Playwright + TypeScript**.  

Integrated into **GitHub Actions** with **Allure reporting** and **Slack alerts** 

Designed to cut manual regression testing by 70% and provide real-time visibility into quality.

![Status](https://img.shields.io/badge/Status-Ready-brightgreen)
![Stack](https://img.shields.io/badge/Stack-Playwright%20%7C%20TypeScript%20%7C%20GitHub%20Actions-blue)
![Reporting](https://img.shields.io/badge/Reporting-Allure-orange)
![Alerts](https://img.shields.io/badge/Alerts-Slack-purple)

A scalable QA automation pipeline built with **Playwright + TypeScript**, integrated with **GitHub Actions**, publishing **Allure** reports, and sending **Slack** notifications.  

This repository is a **public demo**; the original production pipeline lives in a private company repo.

---

## 🧭 TL;DR 
- **77 automated tests** (demo set) validate high-value user journeys (auth, forms, navigation).  
- **Cross-browser** coverage: Chromium, Firefox, WebKit, Edge.  
- **CI/CD native**: runs on push/PR and on a **daily scheduled regression**.  
- **Stakeholder reports**: Allure dashboards uploaded automatically (GitHub Pages).  
- **Real-time visibility**: Slack alerts with run status + report links.  

> **Role & Ownership:** Designed, implemented, and maintain the entire pipeline end-to-end (architecture, tests, CI, reporting, notifications).

---

## ✨ Key Capabilities
- **Comprehensive Test Suite**: Modular specs + page objects; fast smoke set + deeper regression.  
- **Deterministic Runs**: Retries, traces, screenshots, and video on failure.  
- **Configurable Environments**: `BASE_URL` and secrets via GitHub Actions.  
- **Actionable Reporting**: Allure’s trends, failures, logs, attachments.  
- **Team Signals**: Slack webhook posts on success/failure with links to reports.  

---

## 🧩 Tech Stack
- **Test Framework:** Playwright (`@playwright/test`)  
- **Language:** TypeScript  
- **CI/CD:** GitHub Actions (matrix, caching, artifacts)  
- **Reporting:** Allure  
- **Alerts:** Slack Webhooks  

---

Allure Reporting:
<img width="1721" height="903" alt="image" src="https://github.com/user-attachments/assets/89b5f44d-cbf9-43e3-8716-77bd73d20eb3" />


Slack Intergration: 

<img width="605" height="613" alt="Screenshot 2025-09-05 at 1 55 54 PM" src="https://github.com/user-attachments/assets/837bd0e3-3439-42a4-9460-db4e08ccc018" />




## 🚀 Getting Started

### Prerequisites
- Node.js **v18+** (LTS recommended)  
- Git  
- (Optional) Allure CLI for local viewing

### Setup
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
cp .env.example .env   # set BASE_URL and SLACK_WEBHOOK_URL if needed
npm install
npx playwright install --with-deps
Run Tests
bash
Copy code
# all tests (headless)
npx playwright test

# UI mode (debug)
npx playwright test --ui

# specific file
npx playwright test tests/regression/login.spec.ts

# smoke only
npx playwright test -g "@smoke"
View Reports
bash
Copy code
# Playwright HTML
npx playwright show-report

# Allure (local)
npm run allure:generate && npm run allure:open
🛠️ CI/CD
Triggers: push to main, PR to main, manual (workflow_dispatch), and daily schedule.

Artifacts: Playwright + Allure results uploaded.

Publishing: Allure report → GitHub Pages.

Slack: Webhook messages on every run.

📂 Project Structure
tests/smoke/* — fast health checks to gate deploys

tests/regression/* — functional coverage for core flows

src/pages/* — Page Objects (encapsulated locators & actions)

playwright.config.ts — retries, reporters, projects, tracing, screenshots

🔒 Notes
This demo avoids exposing private endpoints/data.


📬 Contact
LinkedIn: linkedin.com/in/stevenstafford

Portfolio: https://portfolio-site-one-iota.vercel.app/ 
