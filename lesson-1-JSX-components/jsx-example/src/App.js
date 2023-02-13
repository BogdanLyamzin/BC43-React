import './App.css';

const pageTitle = "Page title";

const isMainPage = true;

const booksNumber = 42;

const nullVariable = null;
const booleanVariable = true;
const undefinedVariable = undefined;

const arr = [1, 5, 6];

const obj = {
  name: "User name"
}

const homePageTitle = "Home page";
const otherPageTitle = "Page";

function App() {
  return (
    <>
      <header>
        <h2>{pageTitle}</h2>
      </header>
      <main>
        <h1>{isMainPage ? homePageTitle : otherPageTitle}</h1>
        <p>{`We read ${booksNumber} book.`}</p>
        {nullVariable}
        {booleanVariable}
        {undefinedVariable}
        <p>{arr}</p>
        {/* <p>{obj}</p> */}
        <label htmlFor="book-tile">Book title</label>
        <input id="book-title" className='text-field' placeholder='Book title' autoComplete="Worm" disabled />
        {/* createElement("h1", {}, "Welcome title") */}
      </main>
      <footer>
        <p>page footer</p>
      </footer>
    </>

  );
}

export default App;
