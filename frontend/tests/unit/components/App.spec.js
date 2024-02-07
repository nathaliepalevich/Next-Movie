import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App component", () => {
  it("expect MoviesView to exist", () => {
    const wrapper = shallowMount(App, {
      global: {
        mocks: {
          $t: (key) => key,
        },
      },
    });
    expect(wrapper.find("[data-test=movies-view]").exists()).toBeTruthy();
  });
});
