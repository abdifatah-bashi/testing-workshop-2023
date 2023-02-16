# React testing workshop

Abdifatah Bashi

---

## 📝 Agenda

- Unit testing med Jest
- Mocking
- Integration test med React Testing Library
- End-to-End testing med Playwright
- Live Demo

---

### Unit testing med Jest

- Test enkelte funksjoner og klasser
- Test Forventet output gitt forventet input

```Javascript
function add(x: number, y: number){
  return x + y
}

describe("add", ()=> {
 it("should add two numbers", ()=> {
   expect(1+2).toBe(3)
 })
})

```

---

### React testing library

- Basert på DOM testing library
- Tvinger brukeren til å teste på en høy nivå
- Tester DOM i stedet for implementasjon
- Henter ut HTMl-elementer fra DOM med queries
- Lettere å refaktorer

---

#### React testing library

```JSX
function Counter() = {
  const [count, setCount] = useState(0);
  return {
    <div>
      <p>Current count: {count}</p>
      <button onClick={setCount(count+1)} >+</button>
    </div>
  }
}

```

Test:

```JSX
test("standardverdi for telleren er 0", () => {
  const { getByText } = render(Counter);
  const count = getByText("Current count: 0");
  expect(count).toBeInTheDocument();
});
```

---

Testing prinsipper

1. Test your software in the same way that your users use it
2. Avoid testing implementation details

Note: How to determine an implementation detail?
— If our test does something that the consumer of our code doesn’t, then it’s testing implementation details. (Exposing a private function by example).
— If an internal refactor (changes to implementation but not functionality) breaks your tests , then it’s testing implementation details

Example of “implementation details” :
— Internal state of a component
— Internal methods of a component
— Lifecycle methods of a component
— Child component

---

### Live Demo

- Setup Jest
- Mocking

  - Monkey patching
  - Mock modules
  - Jest Spy

- Test Todo App using TDD (Test Driven approach)
  - React Testing Library
  - Mocking HTTP med MSW (Mock Service Worker)
