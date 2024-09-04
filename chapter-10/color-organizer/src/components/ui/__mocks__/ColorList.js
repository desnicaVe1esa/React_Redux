// Имитатор
const ColorListMock = () => <div></div>

ColorListMock.displayName = "ColorListMock"

export default ColorListMock

/*
    Теперь при имитации компонента /src/components/ui/ColorList с помощью метода jest.mock среда Jest станет брать
    соответствующий имитатор из папки __mocks__ и нам не нужно будет определять имитатор непосредственно в тесте
*/