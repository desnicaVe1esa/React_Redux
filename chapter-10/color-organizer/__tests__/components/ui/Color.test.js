import toJSON from 'enzyme-to-json' /*
                                        Данный модуль предоставляет фугкцию, которой можно воспользоваться для вывода
                                        Enzyme-настроек в виде jsx; это упростит проверку snapshot-вывода на приемлемость
                                    */
import {compose} from 'redux'
import Color from '../../../src/components/ui/Color'

const {shallow, mount} = Enzyme

/*
    Snapshot-тестирование - способ быстро проверить компоненты пользовательского интерфейса и убедиться в отсутствии
    каких-либо неожиданных изменений. Среда Jest может сохранять мгновенное состояние отображенного UI и сравнивать его
    с результатами последующих тестов
*/

describe("<Color /> UI Component", () => {

    const shallowExpect = compose(expect, toJSON, shallow)

    it("Renders correct properties", () =>
        shallowExpect(
            <Color title="Test Color" color="#F0F0F0" rating={3} timestamp="Mon Apr 11 2016 12:54:19 GMT-0700 (PDT)"/>
        ).toMatchSnapshot() /*
                                .toMatchSnapshot() - обнаружитель совпадений. При первом запуске данного теста среда Jest
                                сохранит копию получившегося кода HTML в snapshot-файле. Он будет добавлен к папке
                                __snapshot__, которая находится в том же каталоге, что и тест
                            */
    )

    it("Invokes onRate property", () => {
        mount(<Color title="Test Color" color="#F0F0F0"/>)
            .find("div.star-rating")
            .childAt(2)
            .simulate('click')
    })

    it("Invokes onRate property", () => {
        mount(<Color title="Test Color" color="#F0F0F0"/>)
            .find("button")
            .simulate('click')
    })

})
