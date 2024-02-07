import { mount } from "@vue/test-utils";
import MoviesView from "@/views/MoviesView.vue";

describe("MoviesView component", () => {
  it("expect Header, Footer, Main components to exist", () => {
    const wrapper = mount(MoviesView, {
      global: {
        mocks: { $t: (key) => key },
      },
    });
    expect(wrapper.get("[data-test=header-component]")).toBeTruthy();
    expect(wrapper.get("[data-test=main-component]")).toBeTruthy();
    expect(wrapper.get("[data-test=footer-component]")).toBeTruthy();
  });
});
