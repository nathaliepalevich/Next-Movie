import { mount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

const mockedSocialMediaLinks = [
  {
    link: "https://example.com/facebook",
    icon: "facebook-icon.svg",
    alt: "Facebook",
  },
  {
    link: "https://example.com/twitter",
    icon: "twitter-icon.svg",
    alt: "Twitter",
  },
];

const mockedEmailLink = {
  href: "mailto:support@example.com",
  emailStr: "support@example.com",
};

describe("Footer", () => {
  it("renders contact information correctly", async () => {
    const wrapper = mount(Footer, {
      props: {
        footer: "6:00am – 5:00 pm PT",
      },
      global: {
        mocks: {
          $t: (msg) => {
            const translations = {
              "footer.contact": "Contact us",
              "footer.openingDays": "Mon – Fri",
              "footer.openingHours": "6:00am – 5:00 pm PT",
            };
            return translations[msg] || msg;
          },
        },
      },
      data() {
        return {
          smData: mockedSocialMediaLinks,
          email: mockedEmailLink.href,
          emailStr: mockedEmailLink.emailStr,
        };
      },
    });
    expect(wrapper.find("[data-test=contact-title]").text()).toBe("Contact us");
    expect(wrapper.find("[data-test=email] > a").attributes("href")).toBe(
      mockedEmailLink.href
    );
    expect(wrapper.find("[data-test=email] > a").text()).toBe(
      mockedEmailLink.emailStr
    );
    expect(wrapper.findAll("p").at(1).text()).toContain(
      "Mon – Fri | 6:00am – 5:00 pm PT"
    );
  });

  it("renders social media icons correctly", async () => {
    const wrapper = mount(Footer, {
      props: {
        footer: "6:00am – 5:00 pm PT",
      },
      global: {
        mocks: {
          $t: (msg) => {
            const translations = {
              "footer.contact": "Contact us",
              "footer.openingDays": "Mon – Fri",
              "footer.openingHours": "6:00am – 5:00 pm PT",
            };
            return translations[msg] || msg;
          },
        },
      },
      data() {
        return {
          smData: mockedSocialMediaLinks,
          email: mockedEmailLink.href,
          emailStr: mockedEmailLink.emailStr,
        };
      },
    });

    const socialMediaIcons = wrapper.findAll("[data-test='social-media'] img");
    expect(socialMediaIcons.length).toBe(mockedSocialMediaLinks.length);
    mockedSocialMediaLinks.forEach((link, index) => {
      expect(socialMediaIcons.at(index).attributes("src")).toBe(link.icon);
      expect(socialMediaIcons.at(index).attributes("alt")).toBe(link.alt);
    });
  });
});
