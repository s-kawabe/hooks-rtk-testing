import { render, screen } from '@testing-library/react'
import Render from './Render'

describe("Rendering Test", () => {
  it("Should render all the elements correctly", () => {
    // render: componentの内容を取得
    render(<Render />);
    // 現在のスクリーンの状態を確認する(DOM全体)
    // screen.debug()
    // header要素を取得してdebug
    // RoleはA11yanceにてhtmlタグとの紐付けルールが決められている
    screen.debug(screen.getByRole("heading"))
    // headingが存在するか判定を行う (ToBeTruthyというmatcher)
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy()
    expect(screen.getAllByRole("button")[1]).toBeTruthy()
    // screen.debug(screen.getByText("Udemy"))
    expect(screen.getByText("Udemy")).toBeTruthy()
    // 無いパターンを試したい時
    expect(screen.queryByText("hogehogehogehoge")).toBeNull()
    // idによる取得
    expect(screen.getByTestId("react")).toBeTruthy()
  })
})