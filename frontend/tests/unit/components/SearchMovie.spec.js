import { shallowMount } from "@vue/test-utils";
import SearchMovie from "@/components/SearchMovie.vue";

describe("SearchMovie", () => {
  const movies = [
    { title: "Movie 1", synopsis: "Synopsis 1", released: 2020, rating: 4 },
    { title: "Movie 2", synopsis: "Synopsis 2", released: 2019, rating: 3 },
  ];
  const wrapper = shallowMount(SearchMovie, {
    props: {
      movies: movies,
    },
    global: {
      mocks: {
        $t: (key) => key,
      },
    },
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("filters movies based on search criteria", async () => {
    wrapper.setData({ searchBy: "title" });
    wrapper.setData({ searchStr: "Movie 1" });
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("filtered-movies")).toBeTruthy();
  });
});
