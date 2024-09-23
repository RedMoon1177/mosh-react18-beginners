# mosh-react18-beginners

### Lesson notes:

1. Building Components >> lesson 10: Props vs State

- Props: input passed to a component, similar to function args, **immutable**, cause a re-render
- States: data management by a component, similar to local variables, **mutable**, cause a re-render

2. Managing Component State

- State Hook:

  - React updates state asynchronously
  - State is stored outside of components in memory
  - Use hooks at the top level of the components

- lesson 4: **Pure Function**
  - given the same input, always returns the same result.
- lesson 5:
  - React component is rendered twice: in development mode and in strict mode
    <code>
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
    );
    </code>
