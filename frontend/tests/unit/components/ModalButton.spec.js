import { mount } from "@vue/test-utils";
import ModalButton from "@/components/ModalButton.vue";

describe("ModalButton", () => {
  const btnText = "Click Me";

  const wrapper = mount(ModalButton, {
    props: {
      isOpen: true,
      btnText,
    },
  });
  it("emits 'button-clicked' event when button is clicked", async () => {
    const button = wrapper.find("button");
    await button.trigger("click");

    expect(wrapper.emitted("button-clicked")).toBeTruthy();
    expect(wrapper.emitted("button-clicked")[0]).toEqual(["clicked"]);
  });

  it("renders button text correctly", () => {
    expect(wrapper.text()).toContain(btnText);
  });

  it("adds 'active' class when isOpen prop is true", async () => {
    expect(wrapper.find("button").classes()).toContain("active");
  });

  it("does not add 'active' class when isOpen prop is false", async () => {
    const wrapper = mount(ModalButton, {
      props: {
        isOpen: false,
      },
    });

    expect(wrapper.find("button").classes()).not.toContain("active");
  });
});
