import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
// import axios from "axios";

const mockMovies = [
  {
    title: "2001: A Space Odyssey",
    image:
      "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd8H3yW84QBZ7bXkGlzSmeKjpS8gUEV7S_zPN4qVOX7mQ0SNpyHlOkh0WGGlrARjpOZPFlZXyU4t5E8phADO9rq80g.jpg?r=43c",
    synopsis:
      "While investigating the appearance of mysterious monoliths throughout the universe, two astronauts battle their ship&#39;s intelligent computer system.<br><b>New on 2020-06-18</b>",
    rating: "8.3",
  },
  {
    title: "Ace Ventura: When Nature Calls",
    image:
      "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd2CXwqVibqQ6X3SBFL7ADm7zczv73tuNxCW2zDwA-4SEW5Nkdfnybwn5MXfVE1fHv4IBxtpYBkjF3EZQoqHKWkHkA.jpg?r=914",
    synopsis:
      "Ace travels to the jungles of Africa to recover a rare white bat. But if he fails, a war with the violent Wachootoo tribe is sure to follow.<br><b>New on 2020-06-18</b>",
    rating: "6.4",
  },
];
// Mock the movieService module
// jest.mock("@/services/movieService", () => ({
//   getAllMovies: jest.fn(),
// }));

describe("App.vue", () => {
  it("renders Footer component", () => {
    const wrapper = shallowMount(App);
    console.log(wrapper)
    const mockResponse = {
      data: [
        {
          mockMovies,
        },
      ],
    };
    // axios.get.mockResolvedValue(mockResponse);

    // expect(wrapper.findComponent(Header).exists()).toBe(true);
    // expect(wrapper.findComponent(Main).exists()).toBe(true);
    expect(wrapper.findComponent(Footer).exists()).toBe(true);
  });
});
