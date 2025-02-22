import React from "react";

const Hooks = () => {
  const hooksData = [
    {
      id: "useState",
      whenItTriggers: "When the state value changes.",
      whyItTriggers:
        "React compares the new state with the previous one. If different, it triggers a re-render.",
      speciality:
        "Preserves state between renders and ensures consistency for each component instance.",
    },
    {
      id: "useEffect",
      whenItTriggers: "When dependencies in the dependency array change.",
      whyItTriggers:
        "React re-runs the effect to reflect the changes caused by the new dependencies.",
      speciality:
        "Manages side effects and controls re-renders with dependency arrays.",
      DependencyArray:
        "Controls when the effect runs (on mount, on update, or on unmount).",
    },
    {
      id: "useMemo",
      whenItTriggers: "When one of its dependencies changes.",
      whyItTriggers:
        "Recalculates the memoized value only if dependencies are different.",
      speciality: "Optimizes performance by memoizing expensive calculations.",
    },
    {
      id: "useCallback",
      whenItTriggers: "When dependencies change.",
      whyItTriggers:
        "Returns a new memoized function if dependencies are different.",
      speciality:
        "Prevents child component re-renders by memoizing function references.",
      CommonUseCase:
        "Useful when passing callbacks to child components to avoid triggering their re-renders.",
    },
    {
      id: "useRef",
      whenItTriggers: "Does not trigger re-renders.",
      whyItTriggers:
        "It holds a mutable value that persists across renders without causing re-renders.",
      speciality: "Stores a reference to a DOM element or a mutable value.",
    },
    {
      id: "useContext",
      whenItTriggers: "When the context value changes.",
      whyItTriggers:
        "All components consuming the context re-render when the provider value changes.",
      speciality:
        "Passes data through the component tree without prop drilling.",
    },
    {
      id: "useReducer",
      whenItTriggers: "When the state returned by the reducer changes.",
      whyItTriggers:
        "React compares the new state with the previous one. If different, it triggers a re-render.",
      speciality:
        "Manages complex state logic using a reducer function and dispatch pattern.",
    },
  ];

  return (
    <div>
      <h2>React Hooks Detailed Overview</h2>
      {hooksData.map(
        ({
          id,
          whenItTriggers,
          whyItTriggers,
          speciality,
          DependencyArray,
          CommonUseCase,
        }) => (
          <div
            key={id}
            style={{
              marginBottom: "20px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <h3>{id}</h3>
            {id === "useReducer" && (
              <p>
                <strong>useReducer:</strong> useReducer is alternative to
                useState for managing complex state logic It is Particularly
                useful When:
                <ul>
                  <li>State transitions depend on the previous state.</li>
                  <li>
                    There are multiple state variables that change together.
                  </li>
                  <li>
                    You want to centralize state logic (similar to Redux but
                    local to the component).
                  </li>
                </ul>
              </p>
            )}
            <p>
              <strong>When it triggers re-renders:</strong> {whenItTriggers}
            </p>
            <p>
              <strong>Why it triggers re-renders:</strong> {whyItTriggers}
            </p>
            <p>
              <strong>Speciality:</strong> {speciality}
            </p>

            {id === "useReducer" && (
              <p>
                <strong>Workflow:</strong>
                <ol>
                  <li>
                    <strong>State Initialization:</strong> Initializes state
                    with an initial value.
                  </li>
                  <li>
                    <strong>Action Dispatch:</strong> An action object is
                    dispatched to the reducer function.
                  </li>
                  <li>
                    <strong>Reducer Function:</strong> Determines the next state
                    based on the action type and payload.
                  </li>
                  <li>
                    <strong>Re-render:</strong> If the new state is different,
                    the component re-renders.
                  </li>
                </ol>
                <p>
                  const [state, dispatch] = useReducer(reducer, initialState);
                </p>
                <ul>
                  <li>State: Current State value</li>
                  <li>dispatch: Function to send actions to the reducer.</li>
                  <li>
                    reducer: A pure function (state, action) ={">"} newState.
                  </li>
                  <li>InitialState: The initial value of the state</li>
                </ul>
                <p>
                  <strong>Specialities:</strong>
                  <li>
                    Centralizes complex state logic in the reducer function.
                  </li>
                  <li>Easier to maintain with multiple state transitions.</li>

                  <li>
                    Suitable for managing state objects with multiple
                    properties.
                  </li>
                  <li>
                    The component re-renders only when the count value
                    changes.Improves performance with useCallback or useMemo
                    when dispatching actions.
                  </li>
                </p>
                <p>
                  <strong>Drawbacks:</strong>
                  <li>More boilerplate compared to useState.</li>
                  <li>Can be overkill for simple state management.</li>
                  <li>
                    May lead to deeply nested switch cases if poorly organized.
                  </li>
                </p>
                <p>
                  <strong>Why useReducer Was Introduced:</strong>{" "}
                  <li>
                    <strong>To manage complex state transitions:</strong>{" "}
                    useState is sufficient for simple state, but when multiple
                    state variables depend on each other, useReducer provides a
                    structured way to handle state changes.
                  </li>
                  <li>
                    <strong>Predictable state management:</strong> It encourages
                    a more predictable state flow, similar to Redux but local to
                    the component.
                  </li>
                  <li>
                    <strong>Performance Optimization:</strong> Reduces
                    re-renders when combined with memoization techniques
                    (useMemo, useCallback).
                  </li>
                </p>
              </p>
            )}

            {DependencyArray && (
              <p>
                <strong>Dependency Array:</strong> {DependencyArray}
              </p>
            )}

            {CommonUseCase && (
              <p>
                <strong>Common Use Case:</strong> {CommonUseCase}
              </p>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Hooks;
