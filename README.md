# React SetInterval Memory Leak

This repository demonstrates a common error in React components using `setInterval` within `useEffect` hooks, leading to memory leaks.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

**Problem:** The `setInterval` function is started, but there's no mechanism to stop it when the component unmounts. This leads to a memory leak because the interval continues to run in the background, consuming resources.

**Solution:**  The `useEffect` hook's return function is used to clear the interval using `clearInterval` when the component unmounts or when the dependency array changes.