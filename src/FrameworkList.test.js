import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import {FrameworkList} from './FrameworkList';

afterEach(() => {
  cleanup()
}) 

describe('Rendering the list with props', () => {
  test('Should render 「No data...」 when no data propped ', () => {
    render(<FrameworkList />);
    expect(screen.getByText("No data...")).toBeInTheDocument();
  })

  test('Should render list item correctly', () => {
    const dummyData = [
      { id: 1, name: "React Dummy" },
      { id: 2, name: "Angular Dummy" },
      { id: 3, name: "Vue Dummy" }
    ]
    render(<FrameworkList data={dummyData} />); 
    const expectItems = screen.getAllByRole("listitem").map((item) => item.textContent);
    const actualItems = dummyData.map((item) => item.name);
    // 配列などを比較するときは、toEqualを使う
    expect(expectItems).toEqual(actualItems);
    // クエリにはいくつかの種類があります（「get」、「find」、「query」）
    // それらの違いは、要素が見つからない場合にクエリがエラーをスローするか、Promiseを返して再試行するかです
    expect(screen.queryByText("No data...")).toBeNull();
  })
})