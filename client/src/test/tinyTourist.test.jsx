import { render, screen } from "@testing-library/react"

import Pagination from "../components/Pagination/Pagination";


describe("Pagination", ()=> {
  test("Should be a render a pagination component", () => {
    render(<Pagination currentPage={1} totalPages={10} PageToBeChange={() => {}} />); 
    expect(screen.getByText('1 of 10')).toBeDefined();
  })
 })

