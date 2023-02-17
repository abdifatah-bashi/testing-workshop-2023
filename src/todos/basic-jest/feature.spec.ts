import { getWinner } from "./feature";
import * as utils from "./utils";
// monkey patch

// jest.mock("./utils", () => {
//   return {
//     getRandomNumber: () => 1,
//   };
// });

describe("getWinner", () => {
  afterEach(() => jest.resetAllMocks());
  it("should return player1", () => {
    // @ts-ignore
    // utils.getRandomNumber = jest.fn().mockReturnValueOnce(1);

    // Spy
    const getRandomNumberMock = jest.spyOn(utils, "getRandomNumber");
    getRandomNumberMock.mockImplementationOnce(() => 1);
    const winner = getWinner("Ida", "Abdi");

    expect(winner).toBe("Ida");
    expect(getRandomNumberMock).toBeCalledTimes(1);
  });
});
