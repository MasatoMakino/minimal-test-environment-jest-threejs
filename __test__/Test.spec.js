jest.spyOn(console, "error").mockImplementation()

describe("Test", () => {
    const canvas = document.createElement("canvas");

    test("2d context should be exist", () => {
        const context = canvas.getContext("2d");
        expect(context).toBeTruthy();
    })
})