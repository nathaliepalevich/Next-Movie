import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import headerLogo from '@/assets/icons/Logo2.png';

describe("Header component", () => {
  const wrapper = shallowMount(Header);
  it("renders the header logo correctly", () => {
    const img = wrapper.find("[data-test=img-logo]");
    expect(img.attributes("src")).toBe(headerLogo);
    expect(img.attributes("alt")).toBe("header_logo");
  });

});
