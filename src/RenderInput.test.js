import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import {RenderInput} from './RenderInput';

// 各テストケースの終了時に実行される
afterEach(() => {
  // renderの状態をunmountしてくれる (でも無くてもテスト落ちない)
  cleanup()
}) 

describe('RenderInput', () => {
  test('Should render all the elements correctly', () => {
    render(<RenderInput />);
    expect(screen.getByRole("button")).toBeTruthy();
    // placeholderでの要素の取得も可能
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
  })
})

describe('Input form onChange event', () => {
  test('Should update input correctly', () => {
    render(<RenderInput />);
    const inputValue = screen.getByPlaceholderText("Enter");
    userEvent.type(inputValue, "test");
    expect(inputValue.value).toBe("test");
  })
})

describe('Console button conditionally triggered', () => {
  test('Should not trigger output function', () => {
    // jest.fn() → 空のモック関数を作成
    // シンプルに関数が呼び出されるか否か　ということだけを確認する
    const outputConsole = jest.fn()
    render(<RenderInput log={outputConsole} />)
    userEvent.click(screen.getByRole("button"))
    // 呼び出されなかったかどうかを確認
    expect(outputConsole).not.toHaveBeenCalled()
  })
  test('Should trigger output function', () => {
    const outputConsole = jest.fn()
    render(<RenderInput log={outputConsole} />)
    const inputValue = screen.getByPlaceholderText("Enter");
    userEvent.type(inputValue, "test");
    userEvent.click(screen.getByRole("button"))
    // 呼び出されたかどうかを確認
    expect(outputConsole).toHaveBeenCalled()
  })
})