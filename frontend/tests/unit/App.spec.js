import { mount } from "@vue/test-utils";
import App from "@/App.vue";


describe("App component", () => {
  it("expect Header, Footer, Main components to exist", () => {
    const wrapper = mount(App);
    expect(wrapper.get("[data-test=header-component]")).toBeTruthy();
    expect(wrapper.get("[data-test=main-component]")).toBeTruthy();
    expect(wrapper.get("[data-test=footer-component]")).toBeTruthy();
  });

});
