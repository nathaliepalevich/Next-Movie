import { mount } from "@vue/test-utils";
import AppTitle from "@/components/AppTitle.vue";

describe("App Title component", () => {
  it("should render title", () => {
    const wrapper = mount(AppTitle, {
      global: {
        mocks: { $t: (key) => key },
      },
    });
    const titleText = wrapper.get("[data-test=title]").text();
    expect(titleText).toBe("header.title");
  });
});
