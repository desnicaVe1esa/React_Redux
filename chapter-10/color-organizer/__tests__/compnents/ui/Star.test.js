import Star from '../../../src/components/ui/Star'

// shallow - отображает в целях блочного тестирования компоненты не глубже одного уровня
const { shallow } = Enzyme

describe("<Star /> UI Component", () => {

    it("renders default star", () =>
        // find - для запроса получающейся DOM, используя синтаксис селектора
        expect(shallow(<Star />).find('div.star').length)
            .toBe(1))

    it("renders selected stars", () =>
        expect(shallow(<Star selected={true} />).find('div.selected.star').length)
            .toBe(1))

    it("click does not cause error", () => {
        shallow(<Star selected={true} />).find('div').simulate('click')
    })

    it("invokes onClick", () => {
        const _click = jest.fn() // _click - функция-иммитатор
        shallow(<Star onClick={_click} />)
            .find('div.star')
            .simulate('click') // .simulate('click') - имитация щелчка кнопкой мыши на данном элементе
        expect(_click).toBeCalled()
    })

})