import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom";
import CardsCountries from "../components/CardsCountries/CardsCountries";
import Pagination from "../components/Pagination/Pagination";




describe("CardsCountries", ()=> {
 test("Should render an error message when allCountries is not an array", () => {
  render(
    <Router>
      <CardsCountries allCountries="Not an array" currentPage={1} selectedActivity={false} countriesPerPage={10} />
    </Router>
  ); 
  expect(screen.getByText(/so sorry/i)).toBeTruthy();
 })

})

 

describe("Pagination", ()=> {
  test("Should be a render a pagination component", () => {
    render(<Pagination currentPage={1} totalPages={10} PageToBeChange={() => {}} />); 
    expect(screen.getByText('1 of 10')).toBeDefined();
  })


  
 })
  

