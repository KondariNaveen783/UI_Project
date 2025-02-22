import React from "react";

const Promises = () => {
  return (
    <div>
      <p>
        <strong>Overview:</strong>
        <p>
          A Promise is an object representing the eventual completion or failure
          of an asynchronous operation. It allows you to write asynchronous code
          in a more manageable and readable way by avoiding "callback hell."
        </p>
      </p>
      <p>
        <strong>Why Use Promises?</strong>
        <p>
          JavaScript is single-threaded, meaning it executes code line by line.
          However, asynchronous operations like network requests or timers can't
          block the execution. Promises help you manage these asynchronous tasks
          effectively, ensuring that your code remains non-blocking and more
          readable.
        </p>
      </p>
      <p>
        <strong>States of a Promise</strong>
        <p>
          A Promise can be in one of three states:
          <ol>
            <li>Pending – Initial state, neither fulfilled nor rejected.</li>
            <li>Fulfilled – The operation was successful.</li>
            <li>Rejected – The operation failed.</li>
          </ol>
          Once a Promise is either fulfilled or rejected, it becomes settled and
          cannot change its state again.
        </p>
        <p>
          Promise accepts a callback function which takes two functions as
          parameters they are
          <ul>
            <li>
              resolve(value): Marks the Promise as fulfilled and passes a value.
            </li>
            <li>
              reject(reason): Marks the Promise as rejected and passes a reason
              (usually an error message).
            </li>
          </ul>
          <pre>
            Ex:
            {`let promise = new Promise((resolve, reject) => {
  // asynchronous operation
  if (/* operation successful */) {
    resolve('Success!');
  } else {
    reject('Error!');
  }
});
`}
          </pre>
        </p>
      </p>
      <p>
        <strong>Consuming Promises</strong>
        <p>
          There are three main ways to consume Promises:
          <ol>
            <li>then() – Handles the fulfillment.</li>
            <li>catch() – Handles the rejection.</li>
            <li>
              finally() – Executes after the Promise is settled, regardless of
              the outcome.
            </li>
          </ol>
          <pre>
            Ex:
            {`promise
  .then(result => {
    console.log('Fulfilled:', result);
  })
  .catch(error => {
    console.error('Rejected:', error);
  })
  .finally(() => {
    console.log('Promise settled.');
  });
`}
          </pre>
        </p>
      </p>
      <p>
        <strong>Example: Using Promises</strong>
        <pre>
          {`const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Data fetched successfully');
      } else {
        reject('Failed to fetch data');
      }
    }, 2000);
  });
};

fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log('Operation completed');
  });
`}
        </pre>
      </p>
      <p>
        <strong>Chaining Promises</strong>
        <p>
          You can chain multiple .then() calls to perform sequential
          asynchronous operations.
        </p>
        <pre>
          {`fetchData()
  .then(data => {
    console.log('Step 1:', data);
    return 'Processed Data';
  })
  .then(processedData => {
    console.log('Step 2:', processedData);
  })
  .catch(error => {
    console.error('Error:', error);
  });
`}
        </pre>
      </p>
      <p>
        <strong>Error Handling</strong>
        <p>
          If an error occurs at any point in the chain, it is caught by the
          nearest .catch():
        </p>
        <pre>
          {`fetchData()
  .then(data => {
    console.log(data);
    throw new Error('Something went wrong');
  })
  .catch(error => {
    console.error('Caught Error:', error.message);
  });
`}
        </pre>
      </p>
      <p>
        <strong>Promise Methods</strong>
        <ol>
          <li>
            <strong>Promise.all()</strong> – Resolves when all Promises resolve;
            rejects if any Promise rejects.
          </li>
          <p>
            <strong>{" Example: "}</strong> <pre></pre>
            {`const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, 'foo'));
Promise.all([promise1, promise2]).then(values => {
  console.log(values); // [3, 'foo']
});
`}
          </p>
          <li>
            <strong>Promise.race()</strong> – Resolves or rejects as soon as one
            Promise settles.
          </li>
          <p>
            <strong>{" Example: "}</strong> <pre></pre>
            {`Promise.race([promise1, promise2]).then(value => {
  console.log(value); // 3 (since promise1 resolves first)
});
`}
          </p>
          <li>
            <strong>Promise.allSettled()</strong> – Resolves after all Promises
            have settled, regardless of outcome.
          </li>
          <p>
            <strong>{" Example: "}</strong> <pre></pre>
            {`Promise.allSettled([promise1, promise2]).then(results => {
  console.log(results);
});
`}
          </p>
          <li>
            <strong>Promise.any()</strong> – Resolves as soon as any Promise
            fulfills; rejects if all Promises are rejected.
          </li>
          <p>
            <strong>{" Example: "}</strong> <pre></pre>
            {`Promise.any([promise1, promise2]).then(value => {
  console.log(value); // 3
});
`}
          </p>
        </ol>
      </p>
      <p>
        <strong>Behind the Scenes: How Promises Work</strong>
        <ol>
          <li>
            <strong>Creation Phase:</strong> When a Promise is created, it
            starts in the pending state.
          </li>
          <li>
            <strong>Executor Function:</strong> The function passed to the
            Promise constructor is executed immediately.
          </li>
          <li>
            <strong>State Transition:</strong>
            <ul>
              <li>If resolve() is called, it transitions to fulfilled.</li>
              <li>If reject() is called, it transitions to rejected.</li>
            </ul>
          </li>
          <li>
            <strong>Microtask Queue:</strong>
            <ul>
              <li>
                .then() and .catch() callbacks are added to the microtask queue.
              </li>
              <li>
                Microtasks have higher priority than macro-tasks (e.g.,
                setTimeout), ensuring that Promise callbacks run as soon as the
                current call stack is clear.
              </li>
            </ul>
          </li>
        </ol>
      </p>
      <p>
        <strong>Example of Microtask Queue</strong>
        <p>
          <pre>{`console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve('Promise Resolved')
  .then(value => {
    console.log(value);
  });

console.log('End');
`}</pre>
        </p>
        <p>
          <strong>Output:</strong>
          <pre>{`
           Start
           End 
           Promise 
           Resolved Timeout`}</pre>
        </p>
        <p>
          <strong>Explanation:</strong>
          <ol>
            <li>Synchronous logs (Start and End) are executed first.</li>
            <li>
              Promise callbacks are pushed to the microtask queue and executed
              next (Promise Resolved).
            </li>
            <li>
              setTimeout is pushed to the macrotask queue and executed last
              (Timeout).
            </li>
          </ol>
        </p>
      </p>
      <p>
        <strong>Common Pitfalls</strong>
        <ol>
          <li>
            <strong>Forgetting to return a Promise:</strong>
            <pre>{`// Incorrect:
.then(() => {
  fetchData(); // No return, so next .then() won't wait for this
});

// Correct:
.then(() => {
  return fetchData();
});
`}</pre>
          </li>
          <li>
            <strong>Uncaught Promise Rejection:</strong>
            <ul>
              <li>
                If a Promise is rejected but not caught, it leads to an
                unhandled promise rejection.
              </li>
              <li>Always add .catch() to handle errors gracefully.</li>
            </ul>
          </li>
        </ol>
      </p>
      <p>
        <strong>Real-World Use Case:</strong>
        <p>{""}</p>
        <pre>{`const getUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ id: 1, name: 'John Doe' });
      } else {
        reject('User not found');
      }
    }, 1000);
  });
};

getUserData(1)
  .then(user => {
    console.log('User:', user);
    return user.name;
  })
  .then(userName => {
    console.log('Username:', userName);
  })
  .catch(error => {
    console.error('Error:', error);
  });
`}</pre>
      </p>
      <p>
        <strong>Best Practices</strong>
        <ol>
          <li>
            Always handle errors using .catch() or try...catch with async/await.
          </li>
          <li>Use .finally() for cleanup tasks.</li>
          <li>Return Promises to maintain chaining.</li>
          <li>Use Promise.all() for parallel asynchronous operations.</li>
        </ol>
      </p>
      <p>
        <strong>When to Use Promises</strong>
        <ul>
          <li>When dealing with asynchronous tasks like:</li>
          <ol>
            <li>Network requests (e.g., fetch() API)</li>
            <li>File operations</li>
            <li>Timers (e.g., setTimeout, setInterval)</li>
            <li>Animations (e.g., CSS transitions)</li>
          </ol>
        </ul>
      </p>
      <p>
        <strong>Summary</strong>
        <ul>
          <li>
            Promises make asynchronous code more manageable and avoid callback
            hell.
          </li>
          <li>They have three states: Pending, Fulfilled, and Rejected</li>
          <li>Consumed using .then(), .catch(), and .finally().</li>
          <li>
            Support advanced methods like .all(), .race(), .allSettled(), and
            .any().
          </li>
          <li>
            Processed in the microtask queue, which runs before macro-tasks
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Promises;
