import { mount } from "@vue/test-utils";
import AppTitle from "@/components/AppTitle.vue";

describe("App Ttile component", () => {
  it("expect Header, Footer, Main components to exist", () => {
    const wrapper = mount(AppTitle);
    const titleText = wrapper.get("[data-test=title]").text();
    expect(titleText).toBe("Explore your next Movies and tv shows");
  });
});
