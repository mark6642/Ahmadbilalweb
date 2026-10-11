import { test, describe } from "node:test";
import assert from "node:assert/strict";

import { SERVICES_DATA } from "../src/data/servicesData.ts";
import { HOW_IT_WORKS_DATA } from "../src/data/howItWorksData.ts";
import { INDUSTRIES_DATA } from "../src/data/industriesData.ts";
import { FAQ_DATA } from "../src/data/faqData.ts";
import { ABOUT_DATA } from "../src/data/aboutData.ts";

describe("AISMA Data Integrity & Content Validation Test Suite", () => {
  // ==========================================
  // 1. SERVICES DATA TESTS
  // ==========================================
  describe("Services Data (src/data/servicesData.ts)", () => {
    test("TC-01: Contains all 16 core service offerings across all 3 pillars", () => {
      assert.equal(
        SERVICES_DATA.length,
        16,
        "Total services count should be 16 (7 LinkedIn, 4 Instagram, 5 Email)"
      );
    });

    test("TC-02: All 3 main pillars (LinkedIn, Instagram, Email) are present", () => {
      const categories = new Set(SERVICES_DATA.map((s) => s.category));
      assert.ok(categories.has("linkedin"), "LinkedIn category must exist");
      assert.ok(categories.has("instagram"), "Instagram category must exist");
      assert.ok(categories.has("email"), "Email category must exist");

      const linkedinCount = SERVICES_DATA.filter((s) => s.category === "linkedin").length;
      const instagramCount = SERVICES_DATA.filter((s) => s.category === "instagram").length;
      const emailCount = SERVICES_DATA.filter((s) => s.category === "email").length;

      assert.equal(linkedinCount, 7, "LinkedIn should have 7 services");
      assert.equal(instagramCount, 4, "Instagram should have 4 services");
      assert.equal(emailCount, 5, "Email should have 5 services");
    });

    test("TC-03: Every service has a unique slug and URL-safe identifier", () => {
      const slugs = SERVICES_DATA.map((s) => s.slug);
      const uniqueSlugs = new Set(slugs);
      assert.equal(slugs.length, uniqueSlugs.size, "Slugs must be strictly unique");

      slugs.forEach((slug) => {
        assert.match(slug, /^[a-z0-9-]+$/, `Slug "${slug}" must be URL-safe lowercase kebab-case`);
      });
    });

    test("TC-04: Every sub-service contains 'whatWeDo' bullets and 'benefit' statements", () => {
      SERVICES_DATA.forEach((service) => {
        assert.ok(service.subServices.length > 0, `${service.title} must have subServices`);
        service.subServices.forEach((sub) => {
          assert.ok(sub.whatWeDo.length > 0, `${sub.title} must have whatWeDo items`);
          assert.ok(sub.benefit.length > 10, `${sub.title} must have a descriptive benefit`);
        });
      });
    });

    test("TC-05: Every service has approach, whoCanBenefit, and CTA metadata", () => {
      SERVICES_DATA.forEach((service) => {
        assert.ok(service.approach.description.length > 0, `${service.title} missing approach`);
        assert.ok(service.whoCanBenefit.length > 0, `${service.title} missing whoCanBenefit`);
        assert.ok(service.cta.headline.length > 0, `${service.title} missing cta headline`);
        assert.ok(service.cta.buttonText.length > 0, `${service.title} missing cta button`);
      });
    });
  });

  // ==========================================
  // 2. HOW IT WORKS TESTS
  // ==========================================
  describe("How It Works Framework (src/data/howItWorksData.ts)", () => {
    test("TC-06: Contains exactly 6 sequential steps from Step 01 to Step 06", () => {
      assert.equal(HOW_IT_WORKS_DATA.steps.length, 6, "Must have exactly 6 steps");
      HOW_IT_WORKS_DATA.steps.forEach((step, idx) => {
        const expectedNum = `0${idx + 1}`;
        assert.equal(step.stepNumber, expectedNum, `Step sequence mismatch at index ${idx}`);
      });
    });

    test("TC-07: Each step has full deliverables, benefit, and distinct ID", () => {
      HOW_IT_WORKS_DATA.steps.forEach((step) => {
        assert.ok(step.title.length > 5, `Step ${step.stepNumber} title too short`);
        assert.ok(step.tagline.length > 10, `Step ${step.stepNumber} tagline too short`);
        assert.ok(step.whatThisIncludes.length >= 4, `Step ${step.stepNumber} must have deliverables`);
        assert.ok(step.benefit.length > 15, `Step ${step.stepNumber} must have clear benefit`);
      });
    });

    test("TC-08: Philosophy contains all 5 core agency pillars", () => {
      assert.equal(HOW_IT_WORKS_DATA.philosophy.pillars.length, 5, "Must have 5 core pillars");
    });
  });

  // ==========================================
  // 3. INDUSTRIES TESTS
  // ==========================================
  describe("44 Industries Directory (src/data/industriesData.ts)", () => {
    test("TC-09: Exactly 44 unique industries are registered", () => {
      assert.equal(INDUSTRIES_DATA.industries.length, 44, "Must contain exactly 44 industries");
    });

    test("TC-10: Industry IDs are 1 to 44 with no missing or duplicate IDs", () => {
      const ids = INDUSTRIES_DATA.industries.map((i) => i.id);
      const expectedIds = Array.from({ length: 44 }, (_, i) => i + 1);
      assert.deepEqual(ids, expectedIds, "IDs must match 1 to 44 sequentially");
    });

    test("TC-11: Every industry has valid category, description, and targetFocus", () => {
      const validCategories = new Set(INDUSTRIES_DATA.categories);
      INDUSTRIES_DATA.industries.forEach((ind) => {
        assert.ok(
          validCategories.has(ind.category),
          `Industry "${ind.name}" has invalid category: ${ind.category}`
        );
        assert.ok(ind.description.length > 20, `Industry "${ind.name}" description too short`);
        assert.ok(ind.targetFocus.length > 10, `Industry "${ind.name}" targetFocus too short`);
      });
    });
  });

  // ==========================================
  // 4. FAQ TESTS
  // ==========================================
  describe("Frequently Asked Questions (src/data/faqData.ts)", () => {
    test("TC-12: Contains all 17 FAQs mapped to correct categories", () => {
      assert.equal(FAQ_DATA.items.length, 17, "Must contain exactly 17 total FAQs");

      const liFaqs = FAQ_DATA.items.filter((f) => f.category === "linkedin");
      const igFaqs = FAQ_DATA.items.filter((f) => f.category === "instagram");
      const emFaqs = FAQ_DATA.items.filter((f) => f.category === "email");

      assert.equal(liFaqs.length, 7, "LinkedIn must have 7 FAQs");
      assert.equal(igFaqs.length, 5, "Instagram must have 5 FAQs");
      assert.equal(emFaqs.length, 5, "Email must have 5 FAQs");
    });

    test("TC-13: Every FAQ has non-empty question, answer, and key takeaway", () => {
      FAQ_DATA.items.forEach((faq) => {
        assert.ok(faq.question.endsWith("?"), `FAQ "${faq.id}" question must end with '?'`);
        assert.ok(faq.answer.length > 20, `FAQ "${faq.id}" answer too short`);
        assert.ok(faq.keyTakeaway.length > 10, `FAQ "${faq.id}" takeaway too short`);
      });
    });
  });

  // ==========================================
  // 5. ABOUT US TESTS
  // ==========================================
  describe("About Us & Philosophy (src/data/aboutData.ts)", () => {
    test("TC-14: AISMA agency naming and branding is consistent", () => {
      assert.equal(ABOUT_DATA.agencyName, "AISMA");
      assert.equal(ABOUT_DATA.agencyFullName, "AI Sales Marketing Agency");
    });

    test("TC-15: Why Choose AISMA contains 4 value proposition points", () => {
      assert.equal(ABOUT_DATA.whyChooseUs.length, 4, "Must have 4 value props");
    });

    test("TC-16: Target audience and client personas are defined", () => {
      assert.ok(ABOUT_DATA.whoWeWorkWith.idealClients.length >= 4, "Must have 4+ ideal clients");
    });
  });
});
